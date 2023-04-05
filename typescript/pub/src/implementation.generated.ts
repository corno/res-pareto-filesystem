import { API } from "./api.generated"
import { $$ as icreateFileWriter } from "./implementations/createFileWriter.native"
import { $$ as imakeDirectory } from "./implementations/makeDirectory.native"
import { $$ as ireadDirectory } from "./implementations/readDirectory.native"
import { $$ as iunlink } from "./implementations/unlink.native"

export const $api: API = {
    'createFileWriter': icreateFileWriter,
    'makeDirectory': imakeDirectory,
    'readDirectory': ireadDirectory,
    'unlink': iunlink,
}