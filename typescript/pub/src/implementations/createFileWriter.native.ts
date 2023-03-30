import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import { createContainingDirectories } from "../native/createContainingDirectories.native"
import { joinPath } from "../native/joinPath.native"

import { A } from "../api.generated"

import * as n_fs from "fs"

export const $$: A.createFileWriter = () => {
    return {
        'construct': ($is) => {
            return ($) => {
                const joinedPath = joinPath($.path)
    
                function createError(errcode: string, message: string): g_this.T.WriteFileError {
    
                    switch (errcode) {
                        case 'ENOENT':
                            return ['no entity', null]
                        case 'EISDIR':
                            return ['is directory', null]
                        default: {
                            console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem WRITEFILE: ${message}`)
                            return ['unknown', { message: message }]
                        }
                    }
                }
    
                let stream: n_fs.WriteStream | null = null
                let queue: string[] | null = []
                function init() {
    
                    let stream = n_fs.createWriteStream(joinedPath, {
                        'encoding': "utf-8"
                    })
    
                    stream.on('error', ($) => {
                        const errcode = $.message.split(":")[0]
                        if (errcode === undefined) {
                            pi.panic(`unknown error: ${$.message}`)
                        }
    
                        $is.onWriteFileError({
                            'error': createError(errcode, $.message),
                            'path': joinedPath,
                        })
                    })
                    if (queue !== null) {
                        queue.forEach(($) => {
                            stream.write($)
                        })
                    }
                    queue = null
                }
                if ($.createContainingDirectories) {
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
                        if (stream === null) {
                            if (queue === null) {
                                pi.panic(`no stream, no queue`)
                            } else {
                                queue.push($)
                            }
                        } else {
                            stream.write($)
                        }
                    },
                    'end': () => {
                        if (stream === null) {
                            //???
                        } else {
                            stream.end()
                        }
                    },
                }
    
            }
        }
    }
}