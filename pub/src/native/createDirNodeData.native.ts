import * as fs from "fs"

import * as api from "../api"

export function createDirNodeData(path: string, dirent: fs.Dirent): api.TDirNodeData {
    return {
        path: path,
        type: dirent.isDirectory()
            ? ['directory',  null]
            : dirent.isFile()
                ? ['file',  null] :
                ['unknown',  null]
    }
}