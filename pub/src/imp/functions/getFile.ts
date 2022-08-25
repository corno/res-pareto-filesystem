import * as pt from "pareto-core-types"

import * as api from "res-pareto-filesystem"
import { joinPath } from "../internal/joinPath"
import * as fs from "fs"
import { createFileError } from "../internal/createReadFileError"

export type StreamConsumer = {
    onData: ($: string) => void
    onEnd: () => void
}

export const getFile: api.GetFile = ($, $i) => {
    const joinedPath = joinPath($.path)

    return {
        execute: (cb) => {
            fs.readFile(
                joinedPath,
                {
                    encoding: "utf-8",
                },
                (err, data) => {
                    if (err === null) {

                        const consumer = $i.init()
                        consumer.onData(data)
                        consumer.onEnd()
                        cb(["success", {}])

                        // ($i.callback(data, null)).execute(cb)
                    } else {
                        cb(["success", {
                            error: createFileError(err),
                            path: joinedPath
                        }])

                    }
                }
            )

        }
    }

}
