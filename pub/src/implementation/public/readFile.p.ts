import * as pi from "pareto-core-internals"

import * as api from "api-pareto-filesystem"

import { joinPath } from "../private/joinPath.p"
import { createFileError } from "../private/createReadFileError.p"
import { readFileImp } from "../private/readFileImp.p"

export const f_readFile: api.FReadFile = ($) => {
    const joinedPath = joinPath($.path)
    return pi.wrapAsyncValueImp(
        true,
        {
            _execute: (cb) => {
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
    )
}