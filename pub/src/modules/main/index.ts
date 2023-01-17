import { API } from "./api"
import { icreateWriteStream } from "./implementations/createWriteStream.p"
import { igetFile } from "./implementations/getFile.p"
import { imakeDirectory } from "./implementations/makeDirectory.p"
import { ireadDirectory } from "./implementations/readDirectory.p"
import { iunlink } from "./implementations/unlink.p"

export * from "./api"

export const $a: API = {
    'createWriteStream': icreateWriteStream,
    'getFile': igetFile,
    'makeDirectory': imakeDirectory,
    'readDirectory': ireadDirectory,
    'unlink': iunlink,
}