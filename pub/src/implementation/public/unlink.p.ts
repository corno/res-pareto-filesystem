import * as pi from "pareto-core-internals"

import * as api from "api-pareto-filesystem"
import { joinPath } from "../private/joinPath.p"
import { unlinkImp } from "../private/unlinkImp.p"

export const f_unlink: api.FUnlink = ($) => {
    return pi.wrapAsyncValueImp(
        true,
        {
            _execute: (cb) => {
                const joinedPath = joinPath($.path)
                unlinkImp(
                    joinPath($.path),
                    (err) => {
                        if (err !== null) {
                            const errCode = err.code
                            const errMessage = err.message

                            function createError(): api.TUnlinkError {

                                switch (errCode) {
                                    case "ENOENT":
                                        return ["no entity", null]
                                    default: {
                                        console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem UNLINK: ${errMessage}`)
                                        return ["unknown", { message: errMessage }]
                                    }
                                }
                            }
                            cb(["error", {
                                error: createError(),
                                path: joinedPath,
                            }])
                        } else {
                            cb(["success", {}])
                        }


                    }
                )
            }
        }
    )

}