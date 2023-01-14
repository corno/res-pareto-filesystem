import * as pi from "pareto-core-internals"

import * as api from "../api"

import { joinPath } from "../../private/implementations/joinPath.p"
import { mkdirImp } from "../../private/implementations/mkdirImp.p"

export const imakeDirectory: api.CmakeDirectory = ($) => {
    const joinedPath = joinPath($.path)
    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
            mkdirImp(
                joinedPath,
                {
                    recursive: $.createContainingDirectories,
                },
                (err) => {
                    if (err !== null) {
                        const errCode = err.code
                        const errMessage = err.message

                        function createError(): api.TMkdirError {

                            switch (errCode) {
                                //what is the error code for exists????
                                case "ENOENT":
                                    return ["no entity", null]
                                default: {
                                    console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem MKDIR: ${errMessage}`)
                                    return ["unknown", { message: errMessage }]
                                }
                            }
                        }
                        cb(["error", {
                            error: createError(),
                            path: joinedPath,
                        }])
                    } else {
                        cb(["success", null])
                    }
                }
            )
        }
    )
}