import { API } from "./definition/api.generated"
import { $$ as icreateWriteStream } from "./implementations/createWriteStream.native"
import { $$ as igetFile } from "./implementations/getFile.native"
import { $$ as imakeDirectory } from "./implementations/makeDirectory.native"
import { $$ as ireadDirectory } from "./implementations/readDirectory.native"
import { $$ as iunlink } from "./implementations/unlink.native"

export const $r: API = {
    'createWriteStream': icreateWriteStream,
    'getFile': igetFile,
    'makeDirectory': imakeDirectory,
    'readDirectory': ireadDirectory,
    'unlink': iunlink,
}