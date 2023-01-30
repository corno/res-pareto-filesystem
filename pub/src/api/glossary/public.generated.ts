import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TAnnotatedMkdirError = t.UAnnotatedMkdirError

export type TAnnotatedReadDirError = t.UAnnotatedReadDirError

export type TAnnotatedReadFileError = t.UAnnotatedReadFileError

export type TAnnotatedUnlinkError = t.UAnnotatedUnlinkError

export type TAnnotatedWriteFileError = t.UAnnotatedWriteFileError

export type TCreateWriteStreamData = t.UCreateWriteStreamData

export type TDirNodeData = t.UDirNodeData

export type TMkdir_$Data = t.UMkdir_$Data

export type TMkdir_$Result = t.UMkdir_$Result

export type TMkdirError = t.UMkdirError

export type TReadDirectory_$Data = t.UReadDirectory_$Data

export type TReadDirectory_$Result = t.UReadDirectory_$Result

export type TReadDirectory_$Success = t.UReadDirectory_$Success

export type TReadDirError = t.UReadDirError

export type TReadFile_$Data = t.UReadFile_$Data

export type TReadFile_$Result = t.UReadFile_$Result

export type TReadFileError = t.UReadFileError

export type TRmdirError = t.URmdirError

export type TUnlink_$Data = t.UUnlink_$Data

export type TUnlink_$Result = t.UUnlink_$Result

export type TUnlinkError = t.UUnlinkError

export type TWriteFile_$Result = t.UWriteFile_$Result

export type TWriteFileData = t.UWriteFileData

export type TWriteFileError = t.UWriteFileError

export type IReader = {
    'init': ($c: ($i: IStreamConsumer) => void) => void
    'onError': ($: TAnnotatedReadFileError, ) => void
}

export type IStreamConsumer = {
    'onData': ($: mcommon.TString, ) => void
    'onEnd': () => void
}

export type IWriteString = ($: mcommon.TString, ) => void

export type FCreateWriteStream = ($: TCreateWriteStreamData, $c: ($i: IWriteString) => void,) => void

export type FGetFile = ($: mcommon.TPath, $i: IReader,) => void

export type FHandleError = ($: TAnnotatedWriteFileError,) => void

export type FMakeDirectory = ($: TMkdir_$Data,) => pt.AsyncValue<TMkdir_$Result>

export type FReadDirectory = ($: TReadDirectory_$Data,) => pt.AsyncValue<TReadDirectory_$Result>

export type FUnlink = ($: TUnlink_$Data,) => pt.AsyncValue<TUnlink_$Result>