import { API } from "./api"
import { $$ as icreateWriteStream } from "./implementations/createWriteStream.p"
import { $$ as igetFile } from "./implementations/getFile.p"
import { $$ as imakeDirectory } from "./implementations/makeDirectory.p"
import { $$ as ireadDirectory } from "./implementations/readDirectory.p"
import { $$ as iunlink } from "./implementations/unlink.p"

export const $a: API = {
    'createWriteStream': icreateWriteStream,
    'getFile': igetFile,
    'makeDirectory': imakeDirectory,
    'readDirectory': ireadDirectory,
    'unlink': iunlink,
}