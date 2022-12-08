import * as pt from "pareto-core-types"

import { TPath } from "../types/Path.p"
import { IOnWriteFileError } from "../interfaces/interfaces.p"

export type FCreateWriteStream = (
    $: {
        readonly "path": TPath
        readonly "createContainingDirectories": boolean
    },
    $c: (
        $i: ($: string) => void
    ) => void,
    $i: {
        readonly "onError": IOnWriteFileError
    },
    $a: <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
) => void