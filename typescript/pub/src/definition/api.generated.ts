import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type createWriteStream = ($d: {
    readonly 'onError': g_this.F.HandleWriteFileError
}) => g_this.F.CreateWriteStream

export type getFile = g_this.F.GetFile

export type makeDirectory = g_this.F.MakeDirectory

export type readDirectory = g_this.F.ReadDirectory

export type unlink = g_this.F.Unlink

export type API = {
    createWriteStream: createWriteStream
    getFile: getFile
    makeDirectory: makeDirectory
    readDirectory: readDirectory
    unlink: unlink
}