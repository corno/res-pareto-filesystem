import * as api from "../api"

import { writeFileImp } from "../native/writeFileImp.p"
import { createContainingDirectories } from "../native/createContainingDirectories.p"
import { joinPath } from "../native/joinPath.p"
import { concat } from "../native/concat.p"

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