import * as api from "../api"

import { writeFileImp } from "../../private/implementations/writeFileImp.p"
import { createContainingDirectories } from "../../private/implementations/createContainingDirectories.p"
import { joinPath } from "../../private/implementations/joinPath.p"
import { concat } from "../../private/implementations/concat.p"

export const $$: api.CcreateWriteStream = ($d) => {
    return ($, $c) => {
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
                                $d.pr_onError($[1])
                            }
                        }
                    )

                },
                ($) => {
                    $d.pr_onError({
                        error: $,
                        path: joinedPath,
                    })
                }
            )
        }
    }
}