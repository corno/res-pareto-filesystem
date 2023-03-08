
import * as pi from 'pareto-core-internals'

import * as gthis from "../glossary"

import * as nfs from "fs"

import { joinPath } from "../native/joinPath.native"
import { createDirNodeData } from "../native/createDirNodeData.native"

import { readDirectory } from "../api.generated"

export const $$: readDirectory = ($) => {
    const joinedPath = joinPath($.path)
    return pi.wrapAsyncValueImp(
        (cb) => {
            nfs.readdir(
                joinedPath,
                {
                    withFileTypes: true,
                },
                (err, files) => {
                    if (err !== null) {
                        const errCode = err.code
                        const errMessage = err.message
                        function createError(): gthis.T.ReadDirError {

                            switch (errCode) {
                                case 'ENOENT':
                                    return ['no entity',  null]
                                case 'ENOTDIR':
                                    return ['is not directory',  null]
                                default: {
                                    console.error(`DEV TODO: ADD THIS OPTION TO pareto-filesystem READDIR: ${errMessage}`)
                                    return ['unknown',  { message: errMessage }]
                                }
                            }
                        }
                        cb(['error',  {
                            error: createError(),
                            path: joinedPath
                        }])
                    } else {
                        const values: { [key: string]: gthis.T.DirNodeData } = {}

                        files.forEach(($) => {
                            values[$.name] = createDirNodeData(joinPath([joinedPath, $.name]), $)
                        })
                        cb(['success',  pi.wrapRawDictionary(values)])
                    }
                }
            )
        }
    )
}