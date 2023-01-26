import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CcreateWriteStream = ($d: {
    readonly 'onError': glo.FHandleError
}) => glo.FCreateWriteStream

export type CgetFile = glo.FGetFile

export type CmakeDirectory = glo.FMakeDirectory

export type CreadDirectory = glo.FReadDirectory

export type Cunlink = glo.FUnlink

export type API = {
    createWriteStream: CcreateWriteStream
    getFile: CgetFile
    makeDirectory: CmakeDirectory
    readDirectory: CreadDirectory
    unlink: Cunlink
}