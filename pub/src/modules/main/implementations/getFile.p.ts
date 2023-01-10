import * as pi from "pareto-core-internals"

import * as api from "../api"

import { joinPath } from "../../private/implementations/joinPath.p"
import { createFileError } from "../../private/implementations/createReadFileError.p"
import { readFileImp } from "../../private/implementations/readFileImp.p"

// export type IStreamConsumer = {
//     onData: ($: string) => void
//     onEnd: () => void
// }

export const igetFile: api.CgetFile = ($, $i) => {
    const joinedPath = joinPath($)

    readFileImp(
        joinedPath,
        {
            encoding: "utf-8",
        },
        (err, data) => {
            if (err === null) {

                $i.init(($i) => {
                    $i.onData(data)
                    $i.onEnd()
                })
            } else {
                $i.onError({
                    error: createFileError(err),
                    path: joinedPath
                })
            }
        }
    )
}
