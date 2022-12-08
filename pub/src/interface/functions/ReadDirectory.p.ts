import * as pt from "pareto-core-types"

import { TReadDirectory_Data, TReadDirectory_Result } from "../types/etc.p"


export type FReadDirectory = (
    $: TReadDirectory_Data
) => pt.AsyncValue<TReadDirectory_Result>

