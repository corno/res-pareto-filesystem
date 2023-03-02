import * as fs from "fs"

import * as gthis from "../definition/glossary"

export function createDirNodeData(path: string, dirent: fs.Dirent): gthis.T.DirNodeData {
    return {
        path: path,
        type: dirent.isDirectory()
            ? ['directory',  null]
            : dirent.isFile()
                ? ['file',  null] :
                ['unknown',  null]
    }
}