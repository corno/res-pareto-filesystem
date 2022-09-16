
//import * as fs from "fs"
import * as api from "api-pareto-filesystem"
import { joinPath } from "../private/joinPath"
import { createFileError } from "../private/createReadFileError"
import { readFileImp } from "../private/readFileImp"

export const f_readFile: api.AReadFile = ($) => {
    const joinedPath = joinPath($.path)
    return {
        execute: (cb) => {
            readFileImp(
                joinedPath,
                {
                    encoding: "utf-8",
                },
                (err, data) => {
                    if (err === null) {
                        cb(["success", data])
                    } else {
                        cb(["error", {
                            error: createFileError(err),
                            path: joinedPath
                        }])
                    }
                }
            )
        },
    }
}