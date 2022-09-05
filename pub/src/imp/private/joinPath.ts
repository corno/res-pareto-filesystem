import * as pth from "path"
import * as api from "api-pareto-filesystem"
import * as pl from "pareto-core-internals"

export function joinPath(
    path: api.TPath
) {
    return pth.join(...pl.flatten(path))
}