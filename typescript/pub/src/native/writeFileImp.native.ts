import * as gthis from "../definition/glossary"
import * as gcommon from "glo-pareto-common"

import * as nfs from "fs"

import { joinPath } from "./joinPath.native"


export function writeFileImp(
    path: gcommon.T.Path,
    data: string,
    cb: (v: gthis.T.WriteFile_$Result) => void
) {
    const joinedPath = joinPath(path)

    nfs.writeFile(
        joinedPath,
        data,
        {
            encoding: "utf-8",

        },
        (err) => {
            if (err !== null) {
                const errCode = err.code
                const errMessage = err.message

                function createError(): gthis.T.WriteFileError {

                    switch (errCode) {
                        case 'ENOENT':
                            return ['no entity',  null]
                        case 'EISDIR':
                            return ['is directory',  null]
                        default: {
                            console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem WRITEFILE: ${errMessage}`)
                            return ['unknown',  { message: errMessage }]
                        }
                    }
                }
                cb(['error',  {
                    error: createError(),
                    path: joinedPath
                }])
            } else {
                cb(['success',  null])
            }
        }
    )
}
