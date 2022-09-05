
import * as api from "api-pareto-filesystem"
import { createContainingDirectories } from "../private/createContainingDirectories"
import { joinPath } from "../private/joinPath"
import { writeFileImp } from "../private/writeFileImp"


export const writeFile: api.AWriteFile = ($) => {
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