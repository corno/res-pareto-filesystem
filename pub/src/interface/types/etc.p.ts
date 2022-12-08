import * as pt from "pareto-core-types"

import { TAnnotatedFSError, TFSResult } from "./FSResult.p"
import { TMkdirError } from "./MkdirError.p"
import { TPath } from "./Path.p"
import { TReadDirError } from "./ReadDirError.p"
import { TReadFileError } from "./ReadFileError.p"
import { TUnlinkError } from "./UnlinkError.p"
import { TWriteFileError } from "./WriteFileError.p"

export type TAnnotatedReadFileError = TAnnotatedFSError<TReadFileError>


export type TMkdir_Data = {
    readonly path: TPath
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
    readonly "path": TPath
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
    readonly "path": TPath
}



export type TUnlink_Data = {
    readonly path: TPath
}

export type TUnlink_Result = TFSResult<TAnnotatedFSError<TUnlinkError>, {}>


export type TWriteFile_Result = TFSResult<TAnnotatedFSError<TWriteFileError>, {}>


//this type exists because it is used by lib-pareto-filesystem
export type TWriteFileData = {
    readonly path: TPath,
    readonly data: string,
    /**
     * this property is added because getting the dirname of a path is string inspection and should not be done by
     * a caller of this function
     */
    readonly createContainingDirectories: boolean
}