import * as pi from "pareto-core-internals"

import * as api from "../api"

import { joinPath } from "../native/joinPath.p"
import { createFileError } from "../native/createReadFileError.p"
import { readFileImp } from "../native/readFileImp.p"

// export const f_readFile: api.FReadFile = ($) => {
//     const joinedPath = joinPath($.path)
//     return pi.wrapAsyncValueImp(
//         true,
//         (cb) => {
//             readFileImp(
//                 joinedPath,
//                 {
//                     encoding: "utf-8",
//                 },
//                 (err, data) => {
//                     if (err === null) {
//                         cb(['success',  data])
//                     } else {
//                         cb(['error',  {
//                             error: createFileError(err),
//                             path: joinedPath
//                         }])
//                     }
//                 }
//             )
//         },
//     )
// }