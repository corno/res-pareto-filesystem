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
    const joinedPath = joinPath($.path)

    return pi.wrapAsyncValueImp(
        true,
        {
            _execute: (cb) => {
                readFileImp(
                    joinedPath,
                    {
                        encoding: "utf-8",
                    },
                    (err, data) => {
                        if (err === null) {

                            $i.init(($i) => {
                                $i(data)
                            })
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
    )

}
