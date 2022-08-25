import * as pl from "pareto-core-lib"

import * as api from "api-pareto-filesystem"

import * as fs from "fs"
import { joinPath } from "./joinPath"


export function writeFileImp(
    path: api.Path,
    data: string,
    cb: (v: api.WriteFile_Result) => void
) {
    const joinedPath = joinPath(path)

    fs.writeFile(
        joinedPath,
        data,
        {
            encoding: "utf-8",

        },
        (err) => {
            if (err !== null) {
                const errCode = err.code
                const errMessage = err.message

                function createError(): api.TWriteFileError {

                    switch (errCode) {
                        case "ENOENT":
                            return ["no entity", {}]
                        case "EISDIR":
                            return ["is directory", {}]
                        default: {
                            pl.logDebugMessage(`DEV TODO: ADD THIS OPTION TO pareto-filesystem WRITEFILE: ${errMessage}`)
                            return ["unknown", { message: errMessage }]
                        }
                    }
                }
                cb(["error", {
                    error: createError(),
                    path: joinedPath
                }])
            } else {
                cb(["success", {}])

            }
        }
    )
}
