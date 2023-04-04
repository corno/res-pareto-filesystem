
import * as g_this from "../glossary"


export function createFileError(
    err: NodeJS.ErrnoException
): g_this.T.ReadFileError {

    switch (err.code) {
        case 'ENOENT': return ['no entity',  null]
        case 'EISDIR': return ['is directory',  null]

        //case ENOTDIR? if containing dir does not exist    

        default: {
            console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem FILE: ${err.message}`)
            return ['unknown',  { message: err.message }]
        }
    }
}
