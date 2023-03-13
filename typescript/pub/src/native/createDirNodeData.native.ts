import * as fs from "fs"

import * as g_this from "../glossary"

export function createDirNodeData(path: string, dirent: fs.Dirent): g_this.T.DirNodeData {
    return {
        path: path,
        type: dirent.isDirectory()
            ? ['directory',  null]
            : dirent.isFile()
                ? ['file',  null] :
                ['unknown',  null]
    }
}