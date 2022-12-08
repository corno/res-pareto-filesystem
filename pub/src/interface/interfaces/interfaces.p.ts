import { TAnnotatedFSError } from "../types/FSResult.p"
import { TWriteFileError } from "../types/WriteFileError.p"

export type IOnFSError<T> = ($: TAnnotatedFSError<T>) => void

export type IOnWriteFileError = IOnFSError<TWriteFileError>