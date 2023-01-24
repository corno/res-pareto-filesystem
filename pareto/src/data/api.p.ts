import * as pr from 'pareto-core-raw'

import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group, typeReference, externalTypeReference, interfaceReference, procedure, externalNamespacedTypeReference, nmespacedTypeReference, callback, method
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
import * as mglossary from "lib-pareto-typescript-project/dist/modules/glossary"

const d = pr.wrapRawDictionary
const a = pr.wrapRawArray

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
        'parameters': d({}),
        'namespace': {
            'templates': d({
                "AnnotatedError": {
                    'parameters': d({
                        "Error": null,
                    }),
                    'type': grp({
                        "path": member(str()),
                        "error": member(['parameter', "Error"])
                    }),
                },
                "Result": {
                    'parameters': d({
                        "Error": null,
                        "Success": null,
                    }),
                    'type': taggedUnion({
                        "error": ['parameter', "Error"],
                        "success": ['parameter', "Success"],
                    }),
                },
            }),
            'types': types({
                "AnnotatedReadDirError": template("AnnotatedError", {
                    "Error": ref("ReadDirError"),
                }),
                "AnnotatedReadFileError": template("AnnotatedError", {
                    "Error": ref("ReadFileError"),
                }),
                "AnnotatedMkdirError": template("AnnotatedError", {
                    "Error": ref("MkdirError"),
                }),
                "AnnotatedUnlinkError": template("AnnotatedError", {
                    "Error": ref("UnlinkError"),
                }),
                "AnnotatedWriteFileError": template("AnnotatedError", {
                    "Error": ref("WriteFileError"),
                }),
                "CreateWriteStreamData": group({
                    "path": member(er("common", "Path")),
                    "createContainingDirectories": member(bln()),
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
                "DirNodeData": grp({
                    "path": member(str()),
                    "type": member(taggedUnion({
                        "directory": null_(),
                        "file": null_(),
                        "unknown": null_(),
                    })),
                }),
                "MkdirError": taggedUnion({
                    "no entity": null_(),
                    "exists": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "Mkdir_Data": grp({
                    "path": member(er("common", "Path")),
                    "createContainingDirectories": member(bln()),
                }),
                "Mkdir_Result": template("Result", {
                    "Error": ref("AnnotatedMkdirError"),
                    "Success": null_(),
                }),
                "ReadDirectory_Data": grp({
                    "path": member(er("common", "Path")),
                }),
                "ReadDirectory_Result": template("Result", {
                    "Error": ref("AnnotatedReadDirError"),
                    "Success": dictionary(ref("DirNodeData")),
                }),

                "ReadDirectory_Success": grp({}),
                "ReadDirError": taggedUnion({
                    "no entity": null_(),
                    "is not directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "ReadFile_Data": template("Result", {
                    "Error": ref("AnnotatedReadFileError"),
                    "Success": str(),
                }),

                "ReadFile_Result": grp({}),
                "ReadFileError": taggedUnion({
                    "no entity": null_(),
                    "is directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "RmdirError": taggedUnion({
                    "no entity": null_(),
                    "not empty": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "UnlinkError": taggedUnion({
                    "no entity": null_(),
                    "is directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
                "Unlink_Data": grp({
                    "path": member(er("common", "Path")),
                }),
                "Unlink_Result": template("Result", {
                    "Error": ref("AnnotatedUnlinkError"),
                    "Success": null_(),
                }),

                "WriteFile_Result": template("Result", {
                    "Error": ref("AnnotatedWriteFileError"),
                    "Success": null_(),
                }),

                "WriteFileData": grp({
                    "path": member(er("common", "Path")),
                    "data": member(str()),
                    "createContainingDirectories": member(bln()),
                }),
                "WriteFileError": taggedUnion({
                    "no entity": null_(),
                    "is directory": null_(),
                    "unknown": grp({
                        "message": member(str())
                    }),
                }),
            }),
            'interfaces': d({
                "WriteString": method(externalNamespacedTypeReference("common", "String")),
                "StreamConsumer": ['group', {
                    'members': d({
                        "onData": method(externalNamespacedTypeReference("common", "String")),
                        "onEnd": method(null),
                    }),
                }],
                "Reader": ['group', {
                    'members': d({
                        "init": method(null, ['reference', {
                            'context': ['local', null],
                            'namespaces': a([]),
                            'interface': "StreamConsumer"
                        }], true),
                        "onError": ['method', {
                            'data': nmespacedTypeReference("AnnotatedReadFileError"),
                            'interface': null,
                        }],
                    })
                }]
            }),

        },
        'functions': d({
            "MakeDirectory": _function(typeReference("Mkdir_Data"), typeReference("Mkdir_Result"), true),
            "ReadDirectory": _function(typeReference("ReadDirectory_Data"), typeReference("ReadDirectory_Result"), true),
            "Unlink": _function(typeReference("Unlink_Data"), typeReference("Unlink_Result"), true),
            "GetFile": callback(externalTypeReference("common", "Path"), interfaceReference("Reader")),
            "CreateWriteStream": {
                'return type': ['nothing', null],
                'data': typeReference("CreateWriteStreamData"),
                'output interface': null,
                'managed input interface': interfaceReference("WriteString")
            },
            "HandleError": procedure(typeReference("AnnotatedWriteFileError")),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "createWriteStream": {
                'definition': {
                    'function': "CreateWriteStream"
                },
                'type': ['constructor', {
                    'configuration data': null,
                    // 'configuration data': ['type', group({
                    //     'context path': member(er("common", "Path")),
                    // })],
                    'dependencies': d({
                        "onError": {
                            'function': "HandleError"
                        },
                    }),
                }]
            },
            "getFile": {
                'definition': {
                    'function': "GetFile"
                },
                'type': ['reference', null]
            },
            "makeDirectory": {
                'definition': {
                    'function': "MakeDirectory",
                },
                'type': ['reference', null]
            },
            "readDirectory": {
                'definition': {
                    'function': "ReadDirectory",
                },
                'type': ['reference', null]
            },
            "unlink": {
                'definition': {
                    'function': "Unlink",
                },
                'type': ['reference', null]
            }
        })
    },
}