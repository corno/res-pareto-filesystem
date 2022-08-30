
import * as fs from "fs"
import * as api from "api-pareto-filesystem"
import { joinPath } from "../internal/joinPath"

export const unlink: api.Unlink = ($) => {
    return {
        execute: (cb) => {
            const joinedPath = joinPath($.path)
            fs.unlink(
                joinPath($.path),
                (err) => {
                    if (err !== null) {
                        const errCode = err.code
                        const errMessage = err.message

                        function createError(): api.TUnlinkError {

                            switch (errCode) {
                                case "ENOENT":
                                    return ["no entity", {}]
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

}