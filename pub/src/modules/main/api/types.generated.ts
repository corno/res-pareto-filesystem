import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type MAnnotatedError<AError> = {
    readonly 'error': AError
    readonly 'path': string
}

export type MResult<AError, ASuccess> = 
    | ['error', AError]
    | ['success', ASuccess]

export type TAnnotatedMkdirError = MAnnotatedError<TMkdirError>

export type TAnnotatedReadDirError = MAnnotatedError<TReadDirError>

export type TAnnotatedReadFileError = MAnnotatedError<TReadFileError>

export type TAnnotatedUnlinkError = MAnnotatedError<TUnlinkError>

export type TAnnotatedWriteFileError = MAnnotatedError<TWriteFileError>

export type TCreateWriteStreamData = {
    readonly 'createContainingDirectories': boolean
    readonly 'path': mcommon.TPath
}

export type TDirNodeData = {
    readonly 'path': string
    readonly 'type': 
        | ['directory', null]
        | ['file', null]
        | ['unknown', null]
}

export type TMkdir_Data = {
    readonly 'createContainingDirectories': boolean
    readonly 'path': mcommon.TPath
}

export type TMkdir_Result = MResult<TAnnotatedMkdirError, null>

export type TMkdirError = 
    | ['exists', null]
    | ['no entity', null]
    | ['unknown', {
        readonly 'message': string
    }]

export type TReadDirectory_Data = {
    readonly 'path': mcommon.TPath
}

export type TReadDirectory_Result = MResult<TAnnotatedReadDirError, pt.Dictionary<TDirNodeData>>

export type TReadDirectory_Success = {}

export type TReadDirError = 
    | ['is not directory', null]
    | ['no entity', null]
    | ['unknown', {
        readonly 'message': string
    }]

export type TReadFile_Data = MResult<TAnnotatedReadFileError, string>

export type TReadFile_Result = {}

export type TReadFileError = 
    | ['is directory', null]
    | ['no entity', null]
    | ['unknown', {
        readonly 'message': string
    }]

export type TRmdirError = 
    | ['no entity', null]
    | ['not empty', null]
    | ['unknown', {
        readonly 'message': string
    }]

export type TUnlink_Data = {
    readonly 'path': mcommon.TPath
}

export type TUnlink_Result = MResult<TAnnotatedUnlinkError, null>

export type TUnlinkError = 
    | ['is directory', null]
    | ['no entity', null]
    | ['unknown', {
        readonly 'message': string
    }]

export type TWriteFile_Result = MResult<TAnnotatedWriteFileError, null>

export type TWriteFileData = {
    readonly 'createContainingDirectories': boolean
    readonly 'data': string
    readonly 'path': mcommon.TPath
}

export type TWriteFileError = 
    | ['is directory', null]
    | ['no entity', null]
    | ['unknown', {
        readonly 'message': string
    }]

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

export type FMakeDirectory = ($: TMkdir_Data,) => pt.AsyncValue<TMkdir_Result>

export type FReadDirectory = ($: TReadDirectory_Data,) => pt.AsyncValue<TReadDirectory_Result>

export type FUnlink = ($: TUnlink_Data,) => pt.AsyncValue<TUnlink_Result>