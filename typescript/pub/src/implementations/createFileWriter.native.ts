import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { createContainingDirectories } from "../native/createContainingDirectories.native"
import { joinPath } from "../native/joinPath.native"

import { A } from "../api.generated"

import * as n_fs from "fs"

export const $$: A.createFileWriter = () => {
    return {
        'construct': ($is) => ($) => {
            const overwrite = $['overwrite if exists']
            const joinedPath = joinPath($.path)

            function createError(errcode: string, message: string): g_this.T.WriteFileError {
                switch (errcode) {
                    case 'ENOENT': return ['no entity', null]
                    case 'EISDIR': return ['is directory', null]
                    default: {
                        console.error(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem WRITEFILE: ${message}`)
                        return ['unknown', { message: message }]
                    }
                }
            }

            type Stream =
                | ['pending', string[]]
                | ['initialized', n_fs.WriteStream]
                | ['failed', null]

            let stream: Stream = ['pending', []]
            function init() {
                const queue: string[] = stream[0] === 'pending'
                    ? stream[1]
                    : []

                //trycatch is most likely not necessary, errors will be sent to the error stream I think
                // try {
                //     stream = ['initialized', n_fs.createWriteStream(joinedPath, {
                //         'encoding': "utf-8",
                //         'flags': $['overwrite if exists'] ? "w" : "wx"
                //     })]
                // } catch (e) {
                //     //FIXME make sure that the error is thrown because the file already exists
                //     stream = ['failed', null]
                // }

                stream = ['initialized', n_fs.createWriteStream(joinedPath, {
                    'encoding': "utf-8",
                    'flags': $['overwrite if exists'] ? "w" : "wx"
                })]

                if (stream[0] === 'initialized') {
                    const str = stream[1]
                    str.on('error', ($) => {
                        //must the stream be set to failed? I think not, otherwise I cannot end it
                        //stream = ['failed', null]
                        const errcode = $.message.split(":")[0]
                        if (errcode === undefined) {
                            pi.panic(`unknown error: ${$.message}`)
                        }
                        if (errcode === "EEXIST") {
                            if (overwrite) {
                                console.error("Did not expect an EEXIST error")
                            }
                        } else {
                            $is.onWriteFileError({
                                'error': createError(errcode, $.message),
                                'path': joinedPath,
                            })
                        }

                    })

                    queue.forEach(($) => {
                        str.write($)
                    })
                }
            }
            if ($['create containing directories']) {
                createContainingDirectories(
                    joinedPath,
                    () => {
                        init()
                    },
                    ($) => {
                        $is.onWriteFileError({
                            'error': $,
                            'path': joinedPath,
                        })

                    }
                )
            } else {
                init()
            }
            return {
                'data': ($) => {
                    switch (stream[0]) {
                        case 'failed':
                            //drop the data
                            break
                        case 'initialized':
                            stream[1].write($)

                            break
                        case 'pending':
                            stream[1].push($)

                            break
                        default: pi.au(stream[0])
                    }
                },
                'end': () => {
                    if (stream[0] === 'initialized') {
                        stream[1].end()
                    }
                },
            }
        }
    }
}