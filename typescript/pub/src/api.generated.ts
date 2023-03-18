import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type createFileWriter = g_this.ASYNC.C.CreateFileWriter
    
    export type makeDirectory = g_this.ASYNC.F.MakeDirectory
    
    export type readDirectory = g_this.ASYNC.F.ReadDirectory
    
    export type unlink = g_this.ASYNC.F.Unlink
}

export type API = {
    createFileWriter: A.createFileWriter
    makeDirectory: A.makeDirectory
    readDirectory: A.readDirectory
    unlink: A.unlink
}