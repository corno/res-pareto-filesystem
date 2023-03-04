import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type createWriter = ($d: {
    readonly 'onError': g_this.F.HandleWriteFileError
}) => g_this.F.CreateWriter

export type makeDirectory = g_this.F.MakeDirectory

export type readDirectory = g_this.F.ReadDirectory

export type unlink = g_this.F.Unlink

export type API = {
    createWriter: createWriter
    makeDirectory: makeDirectory
    readDirectory: readDirectory
    unlink: unlink
}