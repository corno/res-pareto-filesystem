import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"
import * as fs from "fs"
import * as api from "api-pareto-filesystem"
import { joinPath } from "../internal/joinPath"

export const mkdir: api.Mkdir = ($) => {
    const joinedPath = joinPath($.path)
    return {
        execute: (cb) => {
            fs.mkdir(
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
                                    return ["no entity", {}]
                                default: {
                                    pl.logDebugMessage(`DEV TODO: ADD THIS OPTION TO pareto-filesystem MKDIR: ${errMessage}`)
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