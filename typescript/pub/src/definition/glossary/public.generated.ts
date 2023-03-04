import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {
    
    export type Reader = {
        'init': ($c: ($b: B.StreamConsumer) => void) => void
        'onError': ($: T.AnnotatedReadFileError, ) => void
    }
    
    export type StreamConsumer = {
        'onData': ($: g_common.T.String, ) => void
        'onEnd': () => void
    }
    
    export type WriteString = ($: g_common.T.String, ) => void
}

export namespace F {
    
    export type CreateWriteStream = ($: T.CreateWriteStreamData, $c: ($b: B.WriteString) => void,) => void
    
    export type GetFile = ($: g_common.T.Path, $b: B.Reader,) => void
    
    export type HandleWriteFileError = ($: T.AnnotatedWriteFileError,) => void
    
    export type MakeDirectory = ($: T.Mkdir_$Data,) => pt.AsyncValue<T.Mkdir_$Result>
    
    export type ReadDirectory = ($: T.ReadDirectory_$Data,) => pt.AsyncValue<T.ReadDirectory_$Result>
    
    export type Unlink = ($: T.Unlink_$Data,) => pt.AsyncValue<T.Unlink_$Result>
}