import { API } from "./definition/api.generated"
import { $$ as icreateWriter } from "./implementations/createWriter.native"
import { $$ as imakeDirectory } from "./implementations/makeDirectory.native"
import { $$ as ireadDirectory } from "./implementations/readDirectory.native"
import { $$ as iunlink } from "./implementations/unlink.native"

export const $r: API = {
    'createWriter': icreateWriter,
    'makeDirectory': imakeDirectory,
    'readDirectory': ireadDirectory,
    'unlink': iunlink,
}