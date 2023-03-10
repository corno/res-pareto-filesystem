

import { writeFileImp } from "../native/writeFileImp.native"
import { createContainingDirectories } from "../native/createContainingDirectories.native"
import { joinPath } from "../native/joinPath.native"

import { createFileWriter } from "../api.generated"

export const $$: createFileWriter = ($, $i) => {
    //FIX use fs.createWriteStream
    const joinedPath = joinPath($.path)

    let tmp = ""
    return {
        'data': ($) => {
            tmp += $

        },
        'end': () => {
            if ($.createContainingDirectories) {
                createContainingDirectories(
                    joinedPath,
                    () => {
                        writeFileImp(
                            $.path,
                            tmp,
                            ($) => {
                                if ($[0] === "error") {
                                    $i($[1])
                                }
                            }
                        )
        
                    },
                    ($) => {
                        $i({
                            error: $,
                            path: joinedPath,
                        })
                    }
                )
            }
        },
    }
}