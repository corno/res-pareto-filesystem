import * as pd from 'pareto-core-data'

import { constructor, afunction, algorithm } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createFileWriter": algorithm(constructor("this", {}, "CreateFileWriter")),
        //"openFileStream": algorithm(functionReference("this", {}, "GetFile")),
        "makeDirectory": algorithm(afunction("this", {}, "MakeDirectory")),
        "readDirectory": algorithm(afunction("this", {}, "ReadDirectory")),
        "unlink": algorithm(afunction("this", {}, "Unlink")),
    }),
}