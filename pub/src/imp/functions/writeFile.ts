
import * as api from "res-pareto-filesystem"
import { createContainingDirectories } from "../internal/createContainingDirectories"
import { joinPath } from "../internal/joinPath"
import { writeFileImp } from "../internal/writeFileImp"


export const writeFile: api.WriteFile = ($) => {
    const path = $.path
    const data = $.data
    const joinedPath = joinPath($.path)
    return {
        execute: (cb) => {
            if ($.createContainingDirectories) {
                createContainingDirectories(
                    joinedPath,
                    () => {
                        writeFileImp(
                            path,
                            data,
                            cb,
                        )
                    },
                    ($) => {
                        cb(["error", {
                            error: $,
                            path: joinedPath,
                        }])
                    }
                )
            } else {
                writeFileImp(
                    path,
                    data,
                    cb,
                )
            }
        }
    }
}