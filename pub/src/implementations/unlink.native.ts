import * as pi from "pareto-core-internals"

import * as api from "../api"

import { joinPath } from "../native/joinPath.native"
import { unlinkImp } from "../native/unlinkImp.native"

export const $$: api.Cunlink = ($) => {
    return pi.wrapAsyncValueImp(
        (cb) => {
            const joinedPath = joinPath($.path)
            unlinkImp(
                joinPath($.path),
                (err) => {
                    if (err !== null) {
                        const errCode = err.code
                        const errMessage = err.message

                        function createError(): api.T.UnlinkError {

                            switch (errCode) {
                                case 'ENOENT':
                                    return ['no entity',  null]
                                default: {
                                    console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem UNLINK: ${errMessage}`)
                                    return ['unknown',  { message: errMessage }]
                                }
                            }
                        }
                        cb(['error',  {
                            error: createError(),
                            path: joinedPath,
                        }])
                    } else {
                        cb(['success',  null])
                    }
                }
            )
        }
    )

}