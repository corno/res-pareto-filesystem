import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"

import * as fs from "fs"
import * as api from "api-pareto-filesystem"
import * as asyncAPI from "pareto-core-types"
import { joinPath } from "../internal/joinPath"
import { createFileError } from "../internal/createReadFileError"

export const readFile: api.ReadFile = ($) => {
    const joinedPath = joinPath($.path)
    return {
        execute: (cb) => {
            fs.readFile(
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