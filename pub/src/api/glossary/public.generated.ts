import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type IReader = {
    'init': ($c: ($i: IStreamConsumer) => void) => void
    'onError': ($: T.AnnotatedReadFileError, ) => void
}

export type IStreamConsumer = {
    'onData': ($: gcommon.T.String, ) => void
    'onEnd': () => void
}

export type IWriteString = ($: gcommon.T.String, ) => void

export type FCreateWriteStream = ($: T.CreateWriteStreamData, $c: ($i: IWriteString) => void,) => void

export type FGetFile = ($: gcommon.T.Path, $i: IReader,) => void

export type FHandleError = ($: T.AnnotatedWriteFileError,) => void

export type FMakeDirectory = ($: T.Mkdir_$Data,) => pt.AsyncValue<T.Mkdir_$Result>

export type FReadDirectory = ($: T.ReadDirectory_$Data,) => pt.AsyncValue<T.ReadDirectory_$Result>

export type FUnlink = ($: T.Unlink_$Data,) => pt.AsyncValue<T.Unlink_$Result>