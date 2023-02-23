
import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

import * as nfs from "fs"

import { joinPath } from "../native/joinPath.native"
import { createDirNodeData } from "../native/createDirNodeData.native"

export const $$: mapi.CreadDirectory = ($) => {
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
                        function createError(): mapi.T.ReadDirError {

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
                        const values: { [key: string]: mapi.T.DirNodeData } = {}

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