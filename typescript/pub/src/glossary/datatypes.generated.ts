import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace AnnotatedError {
        
        export type error<TError> = TError
        
        export type path<TError> = g_common.T.String
    }
    
    export type AnnotatedError<TError> = {
        readonly 'error': TError
        readonly 'path': g_common.T.String
    }
    
    export type AnnotatedMkdirError = T.AnnotatedError<T.MkdirError>
    
    export type AnnotatedReadDirError = T.AnnotatedError<T.ReadDirError>
    
    export type AnnotatedReadFileError = T.AnnotatedError<T.ReadFileError>
    
    export type AnnotatedRmdirError = T.AnnotatedError<T.RmdirError>
    
    export type AnnotatedUnlinkError = T.AnnotatedError<T.UnlinkError>
    
    export type AnnotatedWriteFileError = T.AnnotatedError<T.WriteFileError>
    
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
        
        export type path = g_common.T.Path
    }
    
    export type Mkdir_$Data = {
        readonly 'createContainingDirectories': boolean
        readonly 'path': g_common.T.Path
    }
    
    export type Mkdir_$Result = T.Result<T.AnnotatedMkdirError, g_common.T.Null>
    
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
        
        export type path = g_common.T.Path
    }
    
    export type ReadDirectory_$Data = {
        readonly 'path': g_common.T.Path
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
    
    export namespace ReadFile_$Data {
        
        export type path = g_common.T.Path
    }
    
    export type ReadFile_$Data = {
        readonly 'path': g_common.T.Path
    }
    
    export type ReadFile_$Result = T.Result<T.AnnotatedReadFileError, g_common.T.String>
    
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
        
        export type error<TError, TSuccess> = TError
        
        export type success<TError, TSuccess> = TSuccess
    }
    
    export type Result<TError, TSuccess> = 
        | ['error', TError]
        | ['success', TSuccess]
    
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
        
        export type path = g_common.T.Path
    }
    
    export type Unlink_$Data = {
        readonly 'path': g_common.T.Path
    }
    
    export type Unlink_$Result = T.Result<T.AnnotatedUnlinkError, g_common.T.Null>
    
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
    
    export namespace WriteFileParameters {
        
        export type create__containing__directories = boolean
        
        export type overwrite__if__exists = boolean
        
        export type path = g_common.T.Path
    }
    
    export type WriteFileParameters = {
        readonly 'create containing directories': boolean
        readonly 'overwrite if exists': boolean
        readonly 'path': g_common.T.Path
    }
}