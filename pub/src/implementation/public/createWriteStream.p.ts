import * as api from "api-pareto-filesystem"

import { writeFileImp } from "../private/writeFileImp.p"

import { createContainingDirectories } from "../private/createContainingDirectories.p"
import { joinPath } from "../private/joinPath.p"
import { concat } from "../private/concat.p"

export const f_createWriteStream: api.FCreateWriteStream = ($, $c, $i, $a) => {

    return {
        execute: (cb) => {
            //FIX use fs.createWriteStream
            const joinedPath = joinPath($.path)
            let tmp = ""
            $c({
                onData: ($) => {
                    tmp = concat(tmp, $)
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