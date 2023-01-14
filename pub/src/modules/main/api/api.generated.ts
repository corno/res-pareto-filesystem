import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CcreateWriteStream = glo.XCreateWriteStream

export type CgetFile = glo.XGetFile

export type CmakeDirectory = glo.AMakeDirectory

export type CreadDirectory = glo.AReadDirectory

export type Cunlink = glo.AUnlink

export type API = {
    createWriteStream: CcreateWriteStream
    getFile: CgetFile
    makeDirectory: CmakeDirectory
    readDirectory: CreadDirectory
    unlink: Cunlink
}