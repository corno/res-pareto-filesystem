import * as pi from 'pareto-core-internals'

import * as api from "../api"

import { joinPath } from "../native/joinPath.native"
import { createFileError } from "../native/createReadFileError.native"
import { readFileImp } from "../native/readFileImp.native"

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
