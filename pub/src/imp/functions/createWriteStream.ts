import * as pl from "pareto-core-lib"

import * as api from "api-pareto-filesystem"
import { writeFileImp } from "../internal/writeFileImp"

import { createContainingDirectories } from "../internal/createContainingDirectories"
import { joinPath } from "../internal/joinPath"

export const createWriteStream: api.CreateWriteStream = ($, $i, $c) => {

    return {
        execute: (cb) => {
            //FIX use fs.createWriteStream
            const joinedPath = joinPath($.path)
            let tmp = ""
            $c({
                onData: ($) => {
                    tmp += $
                },
                onEnd: () => {
                    if ($.createContainingDirectories) {
                        createContainingDirectories(
                            joinedPath,
                            () => {
                                writeFileImp(
                                    $.path,
                                    tmp,
                                    ($) => {
                                        switch ($[0]) {
                                            case "error":
                                                pl.cc($[1], ($) => {
                                                    $i.onError($)
                                                })
                                                break
                                            case "success":
                                                pl.cc($[1], ($) => {

                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                        cb()
                                    }
                                )

                            },
                            ($) => {
                                $i.onError({
                                    error: $,
                                    path: joinedPath,
                                })
                                cb()
                            }
                        )
                    }
                }
            })

        }
    }
}