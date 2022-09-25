import * as pi from "pareto-core-internals"

import * as api from "api-pareto-filesystem"
import { createContainingDirectories } from "../private/createContainingDirectories.p"
import { joinPath } from "../private/joinPath.p"
import { writeFileImp } from "../private/writeFileImp.p"


export const f_writeFile: api.FWriteFile = ($) => {
    const path = $.path
    const data = $.data
    const joinedPath = joinPath($.path)
    return pi.wrapAsyncValueImp(
        true,
        (cb) => {
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
    )
}