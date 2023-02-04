import * as pr from 'pareto-core-raw'

import {
    reference,
    string,
    null_,
    nested,
    template,
    dictionary, member, taggedUnion, types, group, typeReference, interfaceReference, method, boolean, func, data
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'templates': d({
            "AnnotatedError": {
                'parameters': d({
                    "Error": {},
                }),
                'type': group({
                    "path": member(string()),
                    "error": member(['parameter', "Error"])
                }),
            },
            "Result": {
                'parameters': d({
                    "Error": {},
                    "Success": {},
                }),
                'type': taggedUnion({
                    "error": ['parameter', "Error"],
                    "success": ['parameter', "Success"],
                }),
            },
        }),
        'types': types({
            "AnnotatedReadDirError": template("AnnotatedError", {
                "Error": reference("ReadDirError"),
            }),
            "AnnotatedReadFileError": template("AnnotatedError", {
                "Error": reference("ReadFileError"),
            }),
            "AnnotatedMkdirError": template("AnnotatedError", {
                "Error": reference("MkdirError"),
            }),
            "AnnotatedUnlinkError": template("AnnotatedError", {
                "Error": reference("UnlinkError"),
            }),
            "AnnotatedWriteFileError": template("AnnotatedError", {
                "Error": reference("WriteFileError"),
            }),
            "CreateWriteStreamData": group({
                "path": member(reference("common", "Path")),
                "createContainingDirectories": member(boolean()),
            }),
            // "AnnotatedReadFileError": group({
            //     "path": member(str()),
            //     "error": member(taggedUnion({
            //         "no entity": null_(),
            //         "is directory": null_(),
            //         "unknown": type(group({
            //             "message": member(str())
            //         })),
            //     }))
            // }),
            "DirNodeData": group({
                "path": member(string()),
                "type": member(taggedUnion({
                    "directory": null_(),
                    "file": null_(),
                    "unknown": null_(),
                })),
            }),
            "MkdirError": taggedUnion({
                "no entity": null_(),
                "exists": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            }),
            "Mkdir_Data": group({
                "path": member(reference("common", "Path")),
                "createContainingDirectories": member(boolean()),
            }),
            "Mkdir_Result": template("Result", {
                "Error": reference("AnnotatedMkdirError"),
                "Success": null_(),
            }),
            "ReadDirectory_Data": group({
                "path": member(reference("common", "Path")),
            }),
            "ReadDirectory_Result": template("Result", {
                "Error": reference("AnnotatedReadDirError"),
                "Success": dictionary(reference("DirNodeData")),
            }),

            "ReadDirectory_Success": group({}),
            "ReadDirError": taggedUnion({
                "no entity": null_(),
                "is not directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            }),
            "ReadFile_Data": template("Result", {
                "Error": reference("AnnotatedReadFileError"),
                "Success": string(),
            }),

            "ReadFile_Result": group({}),
            "ReadFileError": taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            }),
            "RmdirError": taggedUnion({
                "no entity": null_(),
                "not empty": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            }),
            "UnlinkError": taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            }),
            "Unlink_Data": group({
                "path": member(reference("common", "Path")),
            }),
            "Unlink_Result": template("Result", {
                "Error": reference("AnnotatedUnlinkError"),
                "Success": null_(),
            }),

            "WriteFile_Result": template("Result", {
                "Error": reference("AnnotatedWriteFileError"),
                "Success": null_(),
            }),

            "WriteFileData": group({
                "path": member(reference("common", "Path")),
                "data": member(string()),
                "createContainingDirectories": member(boolean()),
            }),
            "WriteFileError": taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            }),
        }),
        'interfaces': d({
            "WriteString": method(typeReference("common", "String")),
            "StreamConsumer": ['group', {
                'members': d({
                    "onData": method(typeReference("common", "String")),
                    "onEnd": method(null),
                }),
            }],
            "Reader": ['group', {
                'members': d({
                    "init": method(null, ['reference', {
                        'context': ['local', {}],
                        'interface': "StreamConsumer"
                    }], true),
                    "onError": method(typeReference("AnnotatedReadFileError")),
                })
            }]
        }),
        'functions': d({
            "MakeDirectory": func(typeReference("Mkdir_Data"), null, null, data(typeReference("Mkdir_Result"), true)),
            "ReadDirectory": func(typeReference("ReadDirectory_Data"), null, null, data(typeReference("ReadDirectory_Result"), true)),
            "Unlink": func(typeReference("Unlink_Data"), null, null, data(typeReference("Unlink_Result"), true)),
            "GetFile": func(typeReference("common", "Path"), null, interfaceReference("Reader"), null),
            "CreateWriteStream": func(typeReference("CreateWriteStreamData"), interfaceReference("WriteString"), null, null),
            "HandleError": func(typeReference("AnnotatedWriteFileError"), null, null, null),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "createWriteStream": algorithm(definitionReference("CreateWriteStream"), constructor(null, {
                "onError": definitionReference("HandleError"),
            })),
            "getFile": algorithm(definitionReference("GetFile")),
            "makeDirectory": algorithm(definitionReference("MakeDirectory")),
            "readDirectory": algorithm(definitionReference("ReadDirectory")),
            "unlink": algorithm(definitionReference("Unlink")),
        })
    },
}