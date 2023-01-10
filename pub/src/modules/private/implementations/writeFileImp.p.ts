import * as api from "../../main/api"
import * as mcommon from "glo-pareto-common"

import * as mfs from "fs"
import { joinPath } from "./joinPath.p"


export function writeFileImp(
    path: mcommon.TPath,
    data: string,
    cb: (v: api.TWriteFile_Result) => void
) {
    const joinedPath = joinPath(path)

    mfs.writeFile(
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
                            return ["no entity", null]
                        case "EISDIR":
                            return ["is directory", null]
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
