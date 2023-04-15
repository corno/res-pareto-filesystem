import * as pi from 'pareto-core-internals'

import * as n_path from "path"
import * as g_common from "glo-pareto-common"

export function joinPath(
    path: g_common.T.Path
) {
    let out = ""
    path.__forEach(($) => {
        out = n_path.join(out, $)
    })
    return out
}