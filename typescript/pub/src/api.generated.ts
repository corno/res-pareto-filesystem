import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type makeDirectory = g_this.F.MakeDirectory

export type readDirectory = g_this.F.ReadDirectory

export type unlink = g_this.F.Unlink

export type writeFile = g_this.F.WriteFile

export type API = {
    makeDirectory: makeDirectory
    readDirectory: readDirectory
    unlink: unlink
    writeFile: writeFile
}