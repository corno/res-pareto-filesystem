import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    adata,
    afunc,
    type,
    optional,
    number,
    builderMethod,
    builderReference,
    glossaryParameter,
    parametrizedType,
    typeParameter,
    boolean,
    stream,
    interfaceMethod,
    inf,
    interfaceReference,
    ref,
    externalTypeReference,
    imp,

} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'types': d({
        "AnnotatedError": parametrizedType({ "Error": null }, group({
            "path": member(ref(externalTypeReference("common", "String"))),
            "error": member(typeParameter("Error")),
        })),
        "Result": parametrizedType({
            "Error": null,
            "Success": null,
        }, taggedUnion({
            "error": typeParameter("Error"),
            "success": typeParameter("Success"),
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
            "createContainingDirectories": member(boolean()),
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
        "ReadFile_Data": type(ref(typeReference("Result", {
            "Error": typeReference("AnnotatedReadFileError"),
            "Success": externalTypeReference("common", "String"),
        }))),

        "ReadFile_Result": type(group({})),
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

        "WriteFileData": type(group({
            "path": member(ref(externalTypeReference("common", "Path"))),
            "createContainingDirectories": member(boolean()),
        })),
        "WriteFileError": type(taggedUnion({
            "no entity": null_(),
            "is directory": null_(),
            "unknown": group({
                "message": member(string()),
            }),
        })),
    }),
    'type': ['asynchronous', {

        'interfaces': d({
            //these should be defined somewhere but is this the place
            // "HandleReadDirError": interfaceMethod(typeReference("AnnotatedReadDirFileError"), null, null, null),
            // "HandleReadFileError": interfaceMethod(typeReference("AnnotatedReadFileError"), null, null, null),
            // "HandleMkdirError": interfaceMethod(typeReference("AnnotatedMkdirError"), null, null, null),
            // "HandleUnlinkError": interfaceMethod(typeReference("AnnotatedUnlinkError"), null, null, null),


            "OnFileWriteError": interfaceMethod(typeReference("AnnotatedWriteFileError")),


            // "Reader": ['group', {
            //     'members': d({
            //         "init": builderMethod(null, ['reference', builderReference("StreamConsumer")]),
            //         "onError": builderMethod(typeReference("AnnotatedReadFileError")),
            //     }),
            // }]
            "StringStreamConsumer": stream(
                interfaceMethod(externalTypeReference("common", "String")),
                interfaceMethod(null),
            ),

        }),
        'functions': d({
            "MakeDirectory": afunc(typeReference("Mkdir_Data"), null, adata(typeReference("Mkdir_Result"))),
            "ReadDirectory": afunc(typeReference("ReadDirectory_Data"),  null, adata(typeReference("ReadDirectory_Result"))),
            "Unlink": afunc(typeReference("Unlink_Data"), null,  adata(typeReference("Unlink_Result"))),
            //"OpenFIleStream": afunc(typeReference("common", "Path"), null, null, inf(interfaceReference("Reader"))),
            "CreateFileWriter": afunc(typeReference("WriteFileParameters"),  interfaceReference("OnFileWriteError"), inf(interfaceReference("StringStreamConsumer"))),


        }),
    }],
}