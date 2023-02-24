import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CcreateWriteStream = ($d: {
    readonly 'onError': gglo.FHandleError
}) => gglo.FCreateWriteStream

export type CgetFile = gglo.FGetFile

export type CmakeDirectory = gglo.FMakeDirectory

export type CreadDirectory = gglo.FReadDirectory

export type Cunlink = gglo.FUnlink

export type API = {
    createWriteStream: CcreateWriteStream
    getFile: CgetFile
    makeDirectory: CmakeDirectory
    readDirectory: CreadDirectory
    unlink: Cunlink
}