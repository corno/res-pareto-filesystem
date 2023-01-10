
//import * as fs from "fs"
import * as pi from "pareto-core-internals"

import * as api from "../api"

import { joinPath } from "../../private/implementations/joinPath.p"
import { createDirNodeData } from "../../private/implementations/createDirNodeData.p"
import { readdir } from "../../private/implementations/readdir.p"
import { wrapRawDictionary } from "../../private/implementations/wrapRawDictionary.p"

export const ireadDirectory: api.CreadDirectory = ($) => {
    const joinedPath = joinPath($.path)
    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
            readdir(
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
                                    return ["no entity", null]
                                case "ENOTDIR":
                                    return ["is not directory", null]
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
                        const values: { [key: string]: api.TDirNodeData } = {}

                        files.forEach(($) => {
                            values[$.name] = createDirNodeData(joinPath([joinedPath, $.name]), $)
                        })
                        cb(["success", wrapRawDictionary(values)])
                    }
                }
            )
        }
    )
}