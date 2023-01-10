import * as api from "../api"

import { writeFileImp } from "../../private/implementations/writeFileImp.p"
import { createContainingDirectories } from "../../private/implementations/createContainingDirectories.p"
import { joinPath } from "../../private/implementations/joinPath.p"
import { concat } from "../../private/implementations/concat.p"

export const icreateWriteStream: api.CcreateWriteStream = ($, $c, $i, $a) => {

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