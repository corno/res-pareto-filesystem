
import * as fs from "fs"
import * as pr from "pareto-core-internals"
import * as api from "api-pareto-filesystem"
import { joinPath } from "../internal/joinPath"
import { createDirNodeData } from "../internal/createDirNodeData"

export const readDirectory: api.ReadDirectory = ($) => {
    const joinedPath = joinPath($.path)
    return {
        execute: (cb) => {
            fs.readdir(
                joinedPath,
                {
                    withFileTypes: true,
                },
                (err, files) => {
                    if (err !== null) {
                        const errCode = err.code
                        const errMessage = err.message
                        function createError(): api.TReadDirError {

                            switch (errCode) {
                                case "ENOENT":
                                    return ["no entity", {}]
                                case "ENOTDIR":
                                    return ["is not directory", {}]
                                default: {
                                    console.error(`DEV TODO: ADD THIS OPTION TO pareto-filesystem READDIR: ${errMessage}`)
                                    return ["unknown", { message: errMessage }]
                                }
                            }
                        }
                        cb(["error", {
                            error: createError(),
                            path: joinedPath
                        }])
                    } else {
                        let values: { [key: string]: api.DirNodeData } = {}

                        files.forEach(($) => {
                            values[$.name] = createDirNodeData(joinPath([joinedPath, $.name]), $)
                        })
                        cb(["success", pr.wrapRawDictionary(values)])
                    }
                }
            )
        }
    }
}