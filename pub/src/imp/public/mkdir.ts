//import * as fs from "fs"
import * as api from "api-pareto-filesystem"
import { joinPath } from "../private/joinPath"
import { mkdirImp } from "../private/mkdirImp"

export const mkdir: api.AMkdir = ($) => {
    const joinedPath = joinPath($.path)
    return {
        execute: (cb) => {
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
                                    return ["no entity", {}]
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
                        cb(["success", {}])
                    }
                }
            )
        }
    }
}