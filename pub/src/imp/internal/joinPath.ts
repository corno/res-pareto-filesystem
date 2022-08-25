import * as pth from "path"
import * as api from "res-pareto-filesystem"
import * as pl from "pareto-core-lib"

export function joinPath(
    path: api.Path
) {
    return pth.join(...pl.flatten(path))
}