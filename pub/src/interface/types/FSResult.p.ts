

export type TAnnotatedFSError<Error> = {
    readonly "error": Error
    readonly "path": string
}

export type TFSResult<Error, Success> =
    | ["error", Error]
    | ["success", Success]