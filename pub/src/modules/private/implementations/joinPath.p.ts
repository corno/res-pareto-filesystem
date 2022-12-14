import * as pi from "pareto-core-internals"

import * as pth from "path"
import * as mcommon from "glo-pareto-common"

export function joinPath(
    path: mcommon.TPath
) {
    return pth.join(...pi.flatten(path))
}