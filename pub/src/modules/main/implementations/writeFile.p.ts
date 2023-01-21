import * as pi from "pareto-core-internals"

import * as api from "../api"

import { createContainingDirectories } from "../native/createContainingDirectories.p"
import { joinPath } from "../native/joinPath.p"
import { writeFileImp } from "../native/writeFileImp.p"

// export const f_writeFile: api.FWriteFile = ($) => {
//     const path = $.path
//     const data = $.data
//     const joinedPath = joinPath($.path)
//     return pi.wrapAsyncValueImp(
//         true,
//         (cb) => {
//             if ($.createContainingDirectories) {
//                 createContainingDirectories(
//                     joinedPath,
//                     () => {
//                         writeFileImp(
//                             path,
//                             data,
//                             cb,
//                         )
//                     },
//                     ($) => {
//                         cb(['error',  {
//                             error: $,
//                             path: joinedPath,
//                         }])
//                     }
//                 )
//             } else {
//                 writeFileImp(
//                     path,
//                     data,
//                     cb,
//                 )
//             }
//         }
//     )
// }