import * as pi from "pareto-core-internals"
import * as api from "api-pareto-filesystem"
import { joinPath } from "../private/joinPath.p"
//import * as fs from "fs"
import { createFileError } from "../private/createReadFileError.p"
import { readFileImp } from "../private/readFileImp.p"

// export type IStreamConsumer = {
//     onData: ($: string) => void
//     onEnd: () => void
// }

export const f_getFile: api.FGetFile = ($, $i) => {
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
