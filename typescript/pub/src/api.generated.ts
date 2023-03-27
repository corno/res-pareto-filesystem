import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
}

export namespace A {
    
    export type createFileWriter = () => g_this.ASYNC.A.C.CreateFileWriter
    
    export type makeDirectory = () => g_this.ASYNC.A.F.MakeDirectory
    
    export type readDirectory = () => g_this.ASYNC.A.F.ReadDirectory
    
    export type unlink = () => g_this.ASYNC.A.F.Unlink
}

export type API = {
    readonly 'createFileWriter': A.createFileWriter
    readonly 'makeDirectory': A.makeDirectory
    readonly 'readDirectory': A.readDirectory
    readonly 'unlink': A.unlink
}