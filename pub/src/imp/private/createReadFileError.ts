
import * as api from "api-pareto-filesystem"


export function createFileError(
    err: NodeJS.ErrnoException
): api.TReadFileError {

    switch (err.code) {
        case "ENOENT":
            return ["no entity", {}]
        case "EISDIR":
            return ["is directory", {}]

        //case ENOTDIR? if containing dir does not exist    

        default: {
            console.log(`CORE: DEV TODO: ADD THIS OPTION TO pareto-filesystem FILE: ${err.message}`)
            return ["unknown", { message: err.message }]
        }
    }
}