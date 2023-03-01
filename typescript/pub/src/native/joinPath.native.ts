import * as pi from 'pareto-core-internals'

import * as pth from "path"
import * as gcommon from "glo-pareto-common"

export function joinPath(
    path: gcommon.T.Path
) {
    return pth.join(...pi.flatten(path))
}