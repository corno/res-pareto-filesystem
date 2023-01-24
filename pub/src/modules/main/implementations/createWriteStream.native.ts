import * as api from "../api"

import { writeFileImp } from "../native/writeFileImp.native"
import { createContainingDirectories } from "../native/createContainingDirectories.native"
import { joinPath } from "../native/joinPath.native"
import { concat } from "../native/concat.native"

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
                                $d.onError($[1])
                            }
                        }
                    )

                },
                ($) => {
                    $d.onError({
                        error: $,
                        path: joinedPath,
                    })
                }
            )
        }
    }
}