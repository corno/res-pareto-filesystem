import * as pt from "pareto-core-types"

import { TPath } from "../types/Path.p"
import { TAnnotatedReadFileError } from "../types/etc.p"

export type FGetFile = (
    $: TPath,
    $i: {
        readonly "init": (
            $c: (
                $i: {
                    onData: ($: string) => void
                    onEnd: () => void
                }
            ) => void
        ) => void
        readonly "onError": ($: TAnnotatedReadFileError) => void
    },
    $a: <T>($: pt.AsyncValue<T>, $i: ($: T) => void) => void
) => void
