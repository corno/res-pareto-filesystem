import * as api from "api-pareto-filesystem"

import * as fs from "fs"
import { joinPath } from "./joinPath"


export function writeFileImp(
    path: api.TPath,
    data: string,
    cb: (v: api.TWriteFile_Result) => void
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
                            console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem WRITEFILE: ${errMessage}`)
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
