import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"

export type TAnnotatedReadFileError = {
    readonly "error":
    | ["is directory", null]
    | ["no entity", null]
    | ["unknown", {
        readonly "message": string
    }]
    readonly "path": string
}
export type TMkdirError =
    | ["no entity", null]
    | ["exists", null]
    //| ["is directory", null]
    | ["unknown", {
        readonly "message": string
    }]
export type TWriteFileError =
    | ["no entity", null]
    | ["is directory", null]
    | ["unknown", {
        readonly "message": string
    }]
export type TUnlinkError =
    | ["no entity", null]
    | ["is directory", null]
    | ["unknown", {
        readonly "message": string
    }]
export type TRmdirError =
    | ["no entity", null]
    | ["not empty", null]
    | ["unknown", {
        readonly "message": string
    }]
export type TReadFileError =
    | ["no entity", null]
    | ["is directory", null]
    | ["unknown", {
        readonly "message": string
    }]
export type TReadDirError =
    | ["no entity", null]
    | ["is not directory", null]
    | ["unknown", {
        readonly "message": string
    }]
export type TAnnotatedFSError<Error> = {
    readonly "error": Error
    readonly "path": string
}

export type TFSResult<Error, Success> =
    | ["error", Error]
    | ["success", Success]

export type TMkdir_Data = {
    readonly path: mcommon.TPath
    readonly createContainingDirectories: boolean
}

export type TMkdir_Result = TFSResult<TAnnotatedFSError<TMkdirError>, {}>


export type TDirNodeData = {
    readonly "path": string
    readonly "type":
    | ["directory", null]
    | ["file", null]
    | ["unknown", null]
}

export type TReadDirectory_Data = {
    readonly "path": mcommon.TPath
}

export type TReadDirectory_Success = pt.Dictionary<TDirNodeData>

export type TAnnotatedReadDirectoryError = TAnnotatedFSError<TReadDirError>


export type TReadDirectory_Result = TFSResult<
    TAnnotatedReadDirectoryError,
    TReadDirectory_Success
>


export type TReadFile_Result = TFSResult<
    TAnnotatedFSError<TReadFileError>,
    string
>

export type TReadFile_Data = {
    readonly "path": mcommon.TPath
}



export type TUnlink_Data = {
    readonly path: mcommon.TPath
}

export type TUnlink_Result = TFSResult<TAnnotatedFSError<TUnlinkError>, {}>


export type TWriteFile_Result = TFSResult<TAnnotatedFSError<TWriteFileError>, {}>


//this type exists because it is used by lib-pareto-filesystem
export type TWriteFileData = {
    readonly path: mcommon.TPath,
    readonly data: string,
    /**
     * this property is added because getting the dirname of a path is string inspection and should not be done by
     * a caller of this function
     */
    readonly createContainingDirectories: boolean
}

export type AMakeDirectory = ($: TMkdir_Data) => pt.AsyncValue<TMkdir_Result>

export type AReadDirectory = ($: TReadDirectory_Data) => pt.AsyncValue<TReadDirectory_Result>

export type AUnlink = ($: TUnlink_Data) => pt.AsyncValue<TUnlink_Result>

export type IReader = {
    "init": ($c: ($i: IStreamConsumer) => void) => void
    "onError": ($: TAnnotatedReadFileError,) => void
}

export type IStreamConsumer = {
    "onData": ($: string,) => void
    "onEnd": () => void
}

export type XGetFile = ($: mcommon.TPath, $i: IReader) => void


export type FCreateWriteStream = (
    $: {
        readonly "path": mcommon.TPath
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


export type IOnFSError<T> = ($: TAnnotatedFSError<T>) => void

export type IOnWriteFileError = IOnFSError<TWriteFileError>

export type ICreateWriteStream = FCreateWriteStream