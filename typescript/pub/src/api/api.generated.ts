import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CcreateWriteStream = ($d: {
    readonly 'onError': gthis.FHandleError
}) => gthis.FCreateWriteStream

export type CgetFile = gthis.FGetFile

export type CmakeDirectory = gthis.FMakeDirectory

export type CreadDirectory = gthis.FReadDirectory

export type Cunlink = gthis.FUnlink

export type API = {
    createWriteStream: CcreateWriteStream
    getFile: CgetFile
    makeDirectory: CmakeDirectory
    readDirectory: CreadDirectory
    unlink: Cunlink
}