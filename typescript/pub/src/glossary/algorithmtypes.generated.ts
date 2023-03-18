import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {
        
        export type OnFileWriteError = ($: T.AnnotatedWriteFileError, ) => void
        
        export type StringStreamConsumer = {
            'data': ($: g_common.T.String, ) => void
            'end': () => void
        }
        
        export type WriteFile = ($: T.WriteFileParameters, ) => I.StringStreamConsumer
    }
    
    export namespace C {
        
        export type CreateFileWriter = ($is: {
            'onWriteFileError': I.OnFileWriteError
        }) => I.WriteFile
    }
    
    export namespace F {
        
        export type MakeDirectory = ($: T.Mkdir_$Data) => pt.AsyncValue<T.Mkdir_$Result>
        
        export type ReadDirectory = ($: T.ReadDirectory_$Data) => pt.AsyncValue<T.ReadDirectory_$Result>
        
        export type Unlink = ($: T.Unlink_$Data) => pt.AsyncValue<T.Unlink_$Result>
    }
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {}
}