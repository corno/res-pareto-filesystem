import * as api from "../../interface"

import { writeFileImp } from "../private/writeFileImp.p"

import { createContainingDirectories } from "../private/createContainingDirectories.p"
import { joinPath } from "../private/joinPath.p"
import { concat } from "../private/concat.p"

export const f_createWriteStream: api.FCreateWriteStream = ($, $c, $i, $a) => {

    //FIX use fs.createWriteStream
    const joinedPath = joinPath($.path)
    let tmp = ""
    $c(($) => {
        tmp = concat(tmp, $)
    })

    if ($.createContainingDirectories) {
        createContainingDirectories(
            joinedPath,
            () => {
                writeFileImp(
                    $.path,
                    tmp,
                    ($) => {
                        if ($[0] === "error") {
                            $i.onError($[1])
                        }
                    }
                )

            },
            ($) => {
                $i.onError({
                    error: $,
                    path: joinedPath,
                })
            }
        )
    }
}