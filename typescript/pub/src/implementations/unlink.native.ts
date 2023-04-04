import * as pi from 'pareto-core-internals'

import * as g_this from "../glossary"

import * as n_fs from "fs"

import { joinPath } from "../native/joinPath.native"

import { A } from "../api.generated"

export const $$: A.unlink = () => {
    return ($) => {
        return pi.wrapAsyncValueImp(
            (cb) => {
                const joinedPath = joinPath($.path)
                n_fs.unlink(
                    joinedPath,
                    (err) => {
                        if (err !== null) {
                            const errCode = err.code
                            const errMessage = err.message

                            function createError(): g_this.T.UnlinkError {

                                switch (errCode) {
                                    case 'ENOENT': return ['no entity', null]
                                    default: {
                                        console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem UNLINK: ${errMessage}`)
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