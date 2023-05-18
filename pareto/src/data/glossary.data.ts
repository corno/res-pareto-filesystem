import * as pd from 'pareto-core-data'

import {
    constructor,
    afunction, aInterfaceMethod, aInterfaceReference, boolean, data, dictionary, externalTypeReference, group, imp,
    member, null_, parametrizedType, ref, streamconsumer, string, taggedUnion, type, typeParameter, typeReference, aInterface
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters':d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "AnnotatedError": parametrizedType({ "Error": null }, group({
                "path": member(ref(externalTypeReference("common", "String"))),
                "error": member(ref(typeParameter("Error"))),
            })),
            "Result": parametrizedType({
                "Error": null,
                "Success": null,
            }, taggedUnion({
                "error": ref(typeParameter("Error")),
                "success": ref(typeParameter("Success")),
            })),
            "AnnotatedReadDirError": type(ref(typeReference("AnnotatedError", {
                "Error": typeReference("ReadDirError"),
            }))),
            "AnnotatedReadFileError": type(ref(typeReference("AnnotatedError", {
                "Error": typeReference("ReadFileError"),
            }))),
            "AnnotatedRmdirError": type(ref(typeReference("AnnotatedError", {
                "Error": typeReference("RmdirError"),
            }))),
            "AnnotatedMkdirError": type(ref(typeReference("AnnotatedError", {
                "Error": typeReference("MkdirError"),
            }))),
            "AnnotatedUnlinkError": type(ref(typeReference("AnnotatedError", {
                "Error": typeReference("UnlinkError"),
            }))),
            "AnnotatedWriteFileError": type(ref(typeReference("AnnotatedError", {
                "Error": typeReference("WriteFileError"),
            }))),
            "WriteFileParameters": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "overwrite if exists": member(boolean()),
                "create containing directories": member(boolean()),
            })),
            // "AnnotatedReadFileError": group({
            //     "path": member(str()),
            //     "error": member(taggedUnion({
            //         "no entity": null_(),
            //         "is directory": null_(),
            //         "unknown": type(group({
            //             "message": member(str()),
            //         })),
            //     })),
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
                    "message": member(string()),
                }),
            })),
            "Mkdir_Data": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "createContainingDirectories": member(boolean()),
            })),
            "Mkdir_Result": type(ref(typeReference("Result", {
                "Error": typeReference("AnnotatedMkdirError"),
                "Success": externalTypeReference("common", "Null"),
            }))),
            "ReadDirectory_Data": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
            "ReadDirectory_Success": type(dictionary(ref(typeReference("DirNodeData")))),
            "ReadDirectory_Result": type(ref(typeReference("Result", {
                "Error": typeReference("AnnotatedReadDirError"),
                "Success": typeReference("ReadDirectory_Success"),
            }))),
            "ReadDirError": type(taggedUnion({
                "no entity": null_(),
                "is not directory": null_(),
                "unknown": group({
                    "message": member(string()),
                }),
            })),
            "ReadFile_Result": type(ref(typeReference("Result", {
                "Error": typeReference("AnnotatedReadFileError"),
                "Success": externalTypeReference("common", "String"),
            }))),

            "ReadFile_Data": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
            "ReadFileError": type(taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string()),
                }),
            })),
            "RmdirError": type(taggedUnion({
                "no entity": null_(),
                "not empty": null_(),
                "unknown": group({
                    "message": member(string()),
                }),
            })),
            "UnlinkError": type(taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string()),
                }),
            })),
            "Unlink_Data": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
            "Unlink_Result": type(ref(typeReference("Result", {
                "Error": typeReference("AnnotatedUnlinkError"),
                "Success": externalTypeReference("common", "Null"),
            }))),

            // "WriteFile_Result": type(ref(typeReference("Result", {
            //     "Error": typeReference("AnnotatedWriteFileError"),
            //     "Success": typeReference("common", "Null"),
            // })),

            "WriteFileError": type(taggedUnion({
                "no entity": null_(),
                "is directory": null_(),
                "unknown": group({
                    "message": member(string()),
                }),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            //these should be defined somewhere but is this the place
            // "HandleReadDirError": interfaceMethod(typeReference("AnnotatedReadDirFileError"), null, null, null),
            // "HandleReadFileError": interfaceMethod(typeReference("AnnotatedReadFileError"), null, null, null),
            // "HandleMkdirError": interfaceMethod(typeReference("AnnotatedMkdirError"), null, null, null),
            // "HandleUnlinkError": interfaceMethod(typeReference("AnnotatedUnlinkError"), null, null, null),


            "OnFileWriteError": aInterface(aInterfaceMethod(typeReference("AnnotatedWriteFileError"))),


            // "Reader": ['group', {
            //     'members': d({
            //         "init": builderMethod(null, ['reference', builderReference("StreamConsumer")]),
            //         "onError": builderMethod(typeReference("AnnotatedReadFileError")),
            //     }),
            // }]
            "StringStreamConsumer": aInterface(streamconsumer(
                aInterfaceMethod(externalTypeReference("common", "String")),
                aInterfaceMethod(null),
            )),
            "WriteFile": aInterface(aInterfaceMethod(typeReference("WriteFileParameters"), ['reference', aInterfaceReference("StringStreamConsumer")])),
        }),
        'algorithms': d({
            "CreateFileWriter": constructor(aInterfaceReference("WriteFile"), {
                "onWriteFileError": aInterfaceReference("OnFileWriteError"),
            }),
            "MakeDirectory": afunction(typeReference("Mkdir_Result"), typeReference("Mkdir_Data")),
            "ReadDirectory": afunction(typeReference("ReadDirectory_Result"), typeReference("ReadDirectory_Data")),
            "Unlink": afunction(typeReference("Unlink_Result"), typeReference("Unlink_Data")),
            //"OpenFIleStream": afunc(typeReference("common", "Path"), null, null, inf(interfaceReference("Reader"))),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
}