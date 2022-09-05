
import * as api from "api-pareto-filesystem"
import { joinPath } from "../private/joinPath"
//import * as fs from "fs"
import { createFileError } from "../private/createReadFileError"
import { readFileImp } from "../private/readFileImp"

// export type IStreamConsumer = {
//     onData: ($: string) => void
//     onEnd: () => void
// }

export const getFile: api.AGetFile = ($, $i) => {
    const joinedPath = joinPath($.path)

    return {
        execute: (cb) => {
            readFileImp(
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
