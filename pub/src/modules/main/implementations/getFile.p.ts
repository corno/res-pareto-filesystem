import * as pi from "pareto-core-internals"

import * as api from "../api"

import { joinPath } from "../native/joinPath.p"
import { createFileError } from "../native/createReadFileError.p"
import { readFileImp } from "../native/readFileImp.p"

export const $$: api.CgetFile = ($, $i) => {
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
