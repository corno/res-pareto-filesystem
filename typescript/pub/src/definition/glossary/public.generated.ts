import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type CreateWriter = ($: T.CreateWriterData, $c: ($b: g_common.B.StringBuilder) => void,) => void
    
    export type HandleWriteFileError = ($: T.AnnotatedWriteFileError,) => void
    
    export type MakeDirectory = ($: T.Mkdir_$Data,) => pt.AsyncValue<T.Mkdir_$Result>
    
    export type ReadDirectory = ($: T.ReadDirectory_$Data,) => pt.AsyncValue<T.ReadDirectory_$Result>
    
    export type Unlink = ($: T.Unlink_$Data,) => pt.AsyncValue<T.Unlink_$Result>
}