import * as fs from "fs"
import * as api from "api-pareto-filesystem"

export function createDirNodeData(path: string, dirent: fs.Dirent): api.DirNodeData {
    return {
        path: path,
        type: dirent.isDirectory()
            ? ["directory", {}]
            : dirent.isFile()
                ? ["file", {}] :
                ["unknown", {}]
    }
}