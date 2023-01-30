import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace VAnnotatedError {}
export type VAnnotatedError<AError> = {
    readonly 'error': AError
    readonly 'path': string
}

export type MAnnotatedError<AError> = VAnnotatedError<AError>

export namespace VResult {}
export type VResult<AError, ASuccess> = 
    | ['error', AError]
    | ['success', ASuccess]

export type MResult<AError, ASuccess> = VResult<AError, ASuccess>

export namespace GAnnotatedMkdirError {}
export type GAnnotatedMkdirError = MAnnotatedError<UMkdirError>
export type UAnnotatedMkdirError = GAnnotatedMkdirError

export namespace GAnnotatedReadDirError {}
export type GAnnotatedReadDirError = MAnnotatedError<UReadDirError>
export type UAnnotatedReadDirError = GAnnotatedReadDirError

export namespace GAnnotatedReadFileError {}
export type GAnnotatedReadFileError = MAnnotatedError<UReadFileError>
export type UAnnotatedReadFileError = GAnnotatedReadFileError

export namespace GAnnotatedUnlinkError {}
export type GAnnotatedUnlinkError = MAnnotatedError<UUnlinkError>
export type UAnnotatedUnlinkError = GAnnotatedUnlinkError

export namespace GAnnotatedWriteFileError {}
export type GAnnotatedWriteFileError = MAnnotatedError<UWriteFileError>
export type UAnnotatedWriteFileError = GAnnotatedWriteFileError

export namespace GCreateWriteStreamData {}
export type GCreateWriteStreamData = {
    readonly 'createContainingDirectories': boolean
    readonly 'path': mcommon.TPath
}
export type UCreateWriteStreamData = GCreateWriteStreamData

export namespace GDirNodeData {
    
    export namespace Ptype {}
    export type Ptype = 
        | ['directory', null]
        | ['file', null]
        | ['unknown', null]
}
export type GDirNodeData = {
    readonly 'path': string
    readonly 'type': GDirNodeData.Ptype
}
export type UDirNodeData = GDirNodeData

export namespace GMkdir_$Data {}
export type GMkdir_$Data = {
    readonly 'createContainingDirectories': boolean
    readonly 'path': mcommon.TPath
}
export type UMkdir_$Data = GMkdir_$Data

export namespace GMkdir_$Result {}
export type GMkdir_$Result = MResult<UAnnotatedMkdirError, null>
export type UMkdir_$Result = GMkdir_$Result

export namespace GMkdirError {
    
    export namespace Ounknown {}
    export type Ounknown = {
        readonly 'message': string
    }
}
export type GMkdirError = 
    | ['exists', null]
    | ['no entity', null]
    | ['unknown', GMkdirError.Ounknown]
export type UMkdirError = GMkdirError

export namespace GReadDirectory_$Data {}
export type GReadDirectory_$Data = {
    readonly 'path': mcommon.TPath
}
export type UReadDirectory_$Data = GReadDirectory_$Data

export namespace GReadDirectory_$Result {
    
    export namespace TPSuccess {}
    export type TPSuccess = pt.Dictionary<UDirNodeData>
}
export type GReadDirectory_$Result = MResult<UAnnotatedReadDirError, GReadDirectory_$Result.TPSuccess>
export type UReadDirectory_$Result = GReadDirectory_$Result

export namespace GReadDirectory_$Success {}
export type GReadDirectory_$Success = {}
export type UReadDirectory_$Success = GReadDirectory_$Success

export namespace GReadDirError {
    
    export namespace Ounknown {}
    export type Ounknown = {
        readonly 'message': string
    }
}
export type GReadDirError = 
    | ['is not directory', null]
    | ['no entity', null]
    | ['unknown', GReadDirError.Ounknown]
export type UReadDirError = GReadDirError

export namespace GReadFile_$Data {}
export type GReadFile_$Data = MResult<UAnnotatedReadFileError, string>
export type UReadFile_$Data = GReadFile_$Data

export namespace GReadFile_$Result {}
export type GReadFile_$Result = {}
export type UReadFile_$Result = GReadFile_$Result

export namespace GReadFileError {
    
    export namespace Ounknown {}
    export type Ounknown = {
        readonly 'message': string
    }
}
export type GReadFileError = 
    | ['is directory', null]
    | ['no entity', null]
    | ['unknown', GReadFileError.Ounknown]
export type UReadFileError = GReadFileError

export namespace GRmdirError {
    
    export namespace Ounknown {}
    export type Ounknown = {
        readonly 'message': string
    }
}
export type GRmdirError = 
    | ['no entity', null]
    | ['not empty', null]
    | ['unknown', GRmdirError.Ounknown]
export type URmdirError = GRmdirError

export namespace GUnlink_$Data {}
export type GUnlink_$Data = {
    readonly 'path': mcommon.TPath
}
export type UUnlink_$Data = GUnlink_$Data

export namespace GUnlink_$Result {}
export type GUnlink_$Result = MResult<UAnnotatedUnlinkError, null>
export type UUnlink_$Result = GUnlink_$Result

export namespace GUnlinkError {
    
    export namespace Ounknown {}
    export type Ounknown = {
        readonly 'message': string
    }
}
export type GUnlinkError = 
    | ['is directory', null]
    | ['no entity', null]
    | ['unknown', GUnlinkError.Ounknown]
export type UUnlinkError = GUnlinkError

export namespace GWriteFile_$Result {}
export type GWriteFile_$Result = MResult<UAnnotatedWriteFileError, null>
export type UWriteFile_$Result = GWriteFile_$Result

export namespace GWriteFileData {}
export type GWriteFileData = {
    readonly 'createContainingDirectories': boolean
    readonly 'data': string
    readonly 'path': mcommon.TPath
}
export type UWriteFileData = GWriteFileData

export namespace GWriteFileError {
    
    export namespace Ounknown {}
    export type Ounknown = {
        readonly 'message': string
    }
}
export type GWriteFileError = 
    | ['is directory', null]
    | ['no entity', null]
    | ['unknown', GWriteFileError.Ounknown]
export type UWriteFileError = GWriteFileError