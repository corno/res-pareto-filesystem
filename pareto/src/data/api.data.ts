import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createFileWriter": algorithm(functionReference("this", {}, "CreateFileWriter")),
        //"openFileStream": algorithm(functionReference("this", {}, "GetFile")),
        "makeDirectory": algorithm(functionReference("this", {}, "MakeDirectory")),
        "readDirectory": algorithm(functionReference("this", {}, "ReadDirectory")),
        "unlink": algorithm(functionReference("this", {}, "Unlink")),
    }),
}