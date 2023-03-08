import { API } from "./api.generated"
import { $$ as imakeDirectory } from "./implementations/makeDirectory.native"
import { $$ as ireadDirectory } from "./implementations/readDirectory.native"
import { $$ as iunlink } from "./implementations/unlink.native"
import { $$ as iwriteFile } from "./implementations/writeFile.native"

export const $r: API = {
    'makeDirectory': imakeDirectory,
    'readDirectory': ireadDirectory,
    'unlink': iunlink,
    'writeFile': iwriteFile,
}