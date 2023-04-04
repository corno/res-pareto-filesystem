import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import * as nfs from "fs"

import { joinPath } from "../native/joinPath.native"

import { A } from "../api.generated"

export const $$: A.makeDirectory = () => {
    return ($) => {
        const joinedPath = joinPath($.path)
        return pi.wrapAsyncValueImp(
            (cb) => {
                nfs.mkdir(
                    joinedPath,
                    {
                        recursive: $.createContainingDirectories,
                    },
                    (err) => {
                        if (err !== null) {
                            const errCode = err.code
                            const errMessage = err.message

                            function createError(): g_this.T.MkdirError {

                                switch (errCode) {
                                    //what is the error code for exists????
                                    case 'ENOENT': return ['no entity', null]
                                    default: {
                                        console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem MKDIR: ${errMessage}`)
                                        return ['unknown', { message: errMessage }]
                                    }
                                }
                            }
                            cb(['error', {
                                error: createError(),
                                path: joinedPath,
                            }])
                        } else {
                            cb(['success', null])
                        }
                    }
                )
            }
        )
    }
}