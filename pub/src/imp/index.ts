import * as api from "res-pareto-filesystem"

import { readFile } from "./functions/readFile"
import { readDirectory } from "./functions/readDirectory"
import { writeFile } from "./functions/writeFile"
import { unlink } from "./functions/unlink"
import { getFile } from "./functions/getFile"
import { mkdir } from "./functions/mkDir"
import { createWriteStream } from "./functions/createWriteStream"

type API = {
    readFile: api.ReadFile
    readDirectory: api.ReadDirectory

    writeFile: api.WriteFile
    unlink: api.Unlink
    getFile: api.GetFile
    makeDirectory: api.Mkdir
    createWriteStream: api.CreateWriteStream

}

export const $: API = {
    readFile: readFile,
    readDirectory: readDirectory,

    writeFile: writeFile,
    unlink: unlink,

    getFile: getFile,
    makeDirectory: mkdir,
    createWriteStream: createWriteStream,
}