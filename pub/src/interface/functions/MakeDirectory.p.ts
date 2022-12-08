import * as pt from "pareto-core-types"

import { TMkdir_Data, TMkdir_Result } from "../types/etc.p"



export type FMkdir = (
    $: TMkdir_Data,
) => pt.AsyncValue<TMkdir_Result>
