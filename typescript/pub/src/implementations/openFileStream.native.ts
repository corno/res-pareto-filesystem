


import * as nfs from "fs"

// import { joinPath } from "../native/joinPath.native"
// import { createFileError } from "../native/createReadFileError.native"

// import { getFile } from "../api.generated"

// export const $$: getFile = ($, $i) => {
//     const joinedPath = joinPath($)

//     nfs.readFile(
//         joinedPath,
//         {
//             encoding: "utf-8",
//         },
//         (err, data) => {
//             if (err === null) {

//                 $i.init(($i) => {
//                     $i.onData(data)
//                     $i.onEnd()
//                 })
//             } else {
//                 $i.onError({
//                     error: createFileError(err),
//                     path: joinedPath
//                 })
//             }
//         }
//     )
// }
