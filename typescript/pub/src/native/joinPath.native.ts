import * as pi from 'pareto-core-internals'

import * as pth from "path"
import * as g_common from "glo-pareto-common"

export function joinPath(
    path: g_common.T.Path
) {
    return pth.join(...pi.xflatten(path))
}