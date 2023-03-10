import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {
    
    export type OnFileWriteError = ($: T.AnnotatedWriteFileError, ) => void
    
    export type StringStreamConsumer = {
        'data': ($: g_common.T.String, ) => void
        'end': () => void
    }
}

export namespace F {
    
    export type CreateFileWriter = ($: T.WriteFileParameters, $i: I.OnFileWriteError,) => I.StringStreamConsumer
    
    export type MakeDirectory = ($: T.Mkdir_$Data,) => pt.AsyncValue<T.Mkdir_$Result>
    
    export type ReadDirectory = ($: T.ReadDirectory_$Data,) => pt.AsyncValue<T.ReadDirectory_$Result>
    
    export type Unlink = ($: T.Unlink_$Data,) => pt.AsyncValue<T.Unlink_$Result>
}