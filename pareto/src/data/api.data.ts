import * as pd from 'pareto-core-data'

import {
    reference,
    string,
    null_,
    nested,
    typeParameter,
    dictionary, member, taggedUnion, types, group, typeReference, interfaceReference, method, boolean, func, data, parametrizedTypeReference, type, parametrizedReference, parametrizedType
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'types': d({
            "AnnotatedError": parametrizedType({ "Error": {} }, group({
                "path": member(reference("common", "String")),
                "error": member(typeParameter("Error")),
            })),
            "Result": parametrizedType({
                "Error": {},
                "Success": {},
            }, taggedUnion({
                "error": typeParameter("Error"),
                "success": typeParameter("Success"),
            })),
            "AnnotatedReadDirError": type(parametrizedReference("AnnotatedError", {
                "Error": typeReference("ReadDirError"),
            })),
            "AnnotatedReadFileError": type(parametrizedReference("AnnotatedError", {
                "Error": typeReference("ReadFileError"),
            })),
            "AnnotatedMkdirError": type(parametrizedReference("AnnotatedError", {
                "Error": typeReference("MkdirError"),
            })),
            "AnnotatedUnlinkError": type(parametrizedReference("AnnotatedError", {
                "Error": typeReference("UnlinkError"),
            })),
            "AnnotatedWriteFileError": type(parametrizedReference("AnnotatedError", {
                "Error": typeReference("WriteFileError"),
            })),
            "CreateWriteStreamData": type(group({
                "path": member(reference("common", "Path")),
                "createContainingDirectories": member(boolean()),
            })),
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
            "DirNodeData": type(group({
                "path": member(string()),
                "type": member(taggedUnion({
                    "directory": null_(),
                    "file": null_(),
                    "unknown": null_(),
                })),
            })),
            "MkdirError": type(taggedUnion({
                "no entity": null_(),
                "exists": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            })),
            "Mkdir_Data": type(group({
                "path": member(reference("common", "Path")),
                "createContainingDirectories": member(boolean()),
            })),
            "Mkdir_Result": type(parametrizedReference("Result", {
                "Error": typeReference("AnnotatedMkdirError"),
                "Success": typeReference("common", "Null"),
            })),
            "ReadDirectory_Data": type(group({
                "path": member(reference("common", "Path")),
            })),
            "ReadDirectory_Success": type(dictionary(reference("DirNodeData"))),
            "ReadDirectory_Result": type(parametrizedReference("Result", {
                "Error": typeReference("AnnotatedReadDirError"),
                "Success": typeReference("ReadDirectory_Success"),
            })),
            "ReadDirError": type(taggedUnion({
                "no entity": null_(),
                "is not directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            })),
            "ReadFile_Data": type(parametrizedReference("Result", {
                "Error": typeReference("AnnotatedReadFileError"),
                "Success": typeReference("common", "String"),
            })),

            "ReadFile_Result": type( group({})),
            "ReadFileError": type(taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            })),
            "RmdirError": type( taggedUnion({
                "no entity": null_(),
                "not empty": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            })),
            "UnlinkError": type( taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            })),
            "Unlink_Data": type( group({
                "path": member(reference("common", "Path")),
            })),
            "Unlink_Result": type(parametrizedReference("Result", {
                "Error": typeReference("AnnotatedUnlinkError"),
                "Success": typeReference("common", "Null"),
            })),

            "WriteFile_Result": type(parametrizedReference("Result", {
                "Error": typeReference("AnnotatedWriteFileError"),
                "Success": typeReference("common", "Null"),
            })),

            "WriteFileData": type( group({
                "path": member(reference("common", "Path")),
                "data": member(string()),
                "createContainingDirectories": member(boolean()),
            })),
            "WriteFileError": type( taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string())
                }),
            })),
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