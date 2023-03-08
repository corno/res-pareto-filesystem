import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "writeFile": algorithm(functionReference("this", {}, "WriteFile")),
        //"openFileStream": algorithm(functionReference("this", {}, "GetFile")),
        "makeDirectory": algorithm(functionReference("this", {}, "MakeDirectory")),
        "readDirectory": algorithm(functionReference("this", {}, "ReadDirectory")),
        "unlink": algorithm(functionReference("this", {}, "Unlink")),
    }),
}