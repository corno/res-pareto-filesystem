import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace AnnotatedError {
        
        export type error<AError> = AError
        
        export type path<AError> = gcommon.T.String
    }
    
    export type AnnotatedError<AError> = {
        readonly 'error': AError
        readonly 'path': gcommon.T.String
    }
    
    export type AnnotatedMkdirError = T.AnnotatedError<T.MkdirError>
    
    export type AnnotatedReadDirError = T.AnnotatedError<T.ReadDirError>
    
    export type AnnotatedReadFileError = T.AnnotatedError<T.ReadFileError>
    
    export type AnnotatedUnlinkError = T.AnnotatedError<T.UnlinkError>
    
    export type AnnotatedWriteFileError = T.AnnotatedError<T.WriteFileError>
    
    export namespace CreateWriteStreamData {
        
        export type createContainingDirectories = boolean
        
        export type path = gcommon.T.Path
    }
    
    export type CreateWriteStreamData = {
        readonly 'createContainingDirectories': boolean
        readonly 'path': gcommon.T.Path
    }
    
    export namespace DirNodeData {
        
        export type path = string
        
        export namespace _ltype {
            
            export type directory = null
            
            export type file = null
            
            export type _lunknown = null
        }
        
        export type _ltype = 
            | ['directory', null]
            | ['file', null]
            | ['unknown', null]
    }
    
    export type DirNodeData = {
        readonly 'path': string
        readonly 'type': 
            | ['directory', null]
            | ['file', null]
            | ['unknown', null]
    }
    
    export namespace Mkdir_$Data {
        
        export type createContainingDirectories = boolean
        
        export type path = gcommon.T.Path
    }
    
    export type Mkdir_$Data = {
        readonly 'createContainingDirectories': boolean
        readonly 'path': gcommon.T.Path
    }
    
    export type Mkdir_$Result = T.Result<T.AnnotatedMkdirError, gcommon.T.Null>
    
    export namespace MkdirError {
        
        export type exists = null
        
        export type no__entity = null
        
        export namespace _lunknown {
            
            export type message = string
        }
        
        export type _lunknown = {
            readonly 'message': string
        }
    }
    
    export type MkdirError = 
        | ['exists', null]
        | ['no entity', null]
        | ['unknown', {
            readonly 'message': string
        }]
    
    export namespace ReadDirectory_$Data {
        
        export type path = gcommon.T.Path
    }
    
    export type ReadDirectory_$Data = {
        readonly 'path': gcommon.T.Path
    }
    
    export type ReadDirectory_$Result = T.Result<T.AnnotatedReadDirError, T.ReadDirectory_$Success>
    
    export namespace ReadDirectory_$Success {
        
        export type D = T.DirNodeData
    }
    
    export type ReadDirectory_$Success = pt.Dictionary<T.DirNodeData>
    
    export namespace ReadDirError {
        
        export type is__not__directory = null
        
        export type no__entity = null
        
        export namespace _lunknown {
            
            export type message = string
        }
        
        export type _lunknown = {
            readonly 'message': string
        }
    }
    
    export type ReadDirError = 
        | ['is not directory', null]
        | ['no entity', null]
        | ['unknown', {
            readonly 'message': string
        }]
    
    export type ReadFile_$Data = T.Result<T.AnnotatedReadFileError, gcommon.T.String>
    
    export namespace ReadFile_$Result {}
    
    export type ReadFile_$Result = {}
    
    export namespace ReadFileError {
        
        export type is__directory = null
        
        export type no__entity = null
        
        export namespace _lunknown {
            
            export type message = string
        }
        
        export type _lunknown = {
            readonly 'message': string
        }
    }
    
    export type ReadFileError = 
        | ['is directory', null]
        | ['no entity', null]
        | ['unknown', {
            readonly 'message': string
        }]
    
    export namespace Result {
        
        export type error<AError, ASuccess> = AError
        
        export type success<AError, ASuccess> = ASuccess
    }
    
    export type Result<AError, ASuccess> = 
        | ['error', AError]
        | ['success', ASuccess]
    
    export namespace RmdirError {
        
        export type no__entity = null
        
        export type not__empty = null
        
        export namespace _lunknown {
            
            export type message = string
        }
        
        export type _lunknown = {
            readonly 'message': string
        }
    }
    
    export type RmdirError = 
        | ['no entity', null]
        | ['not empty', null]
        | ['unknown', {
            readonly 'message': string
        }]
    
    export namespace Unlink_$Data {
        
        export type path = gcommon.T.Path
    }
    
    export type Unlink_$Data = {
        readonly 'path': gcommon.T.Path
    }
    
    export type Unlink_$Result = T.Result<T.AnnotatedUnlinkError, gcommon.T.Null>
    
    export namespace UnlinkError {
        
        export type is__directory = null
        
        export type no__entity = null
        
        export namespace _lunknown {
            
            export type message = string
        }
        
        export type _lunknown = {
            readonly 'message': string
        }
    }
    
    export type UnlinkError = 
        | ['is directory', null]
        | ['no entity', null]
        | ['unknown', {
            readonly 'message': string
        }]
    
    export type WriteFile_$Result = T.Result<T.AnnotatedWriteFileError, gcommon.T.Null>
    
    export namespace WriteFileData {
        
        export type createContainingDirectories = boolean
        
        export type data = string
        
        export type path = gcommon.T.Path
    }
    
    export type WriteFileData = {
        readonly 'createContainingDirectories': boolean
        readonly 'data': string
        readonly 'path': gcommon.T.Path
    }
    
    export namespace WriteFileError {
        
        export type is__directory = null
        
        export type no__entity = null
        
        export namespace _lunknown {
            
            export type message = string
        }
        
        export type _lunknown = {
            readonly 'message': string
        }
    }
    
    export type WriteFileError = 
        | ['is directory', null]
        | ['no entity', null]
        | ['unknown', {
            readonly 'message': string
        }]
}