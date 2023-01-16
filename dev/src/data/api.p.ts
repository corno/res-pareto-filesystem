import * as pr from "pareto-core-raw"

import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"
import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common"
        }),
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
                        "error": ['type', ['parameter', "Error"]],
                        "success": ['type', ['parameter', "Success"]],
                    }),
                },
            }),
            'types': types({
                "AnnotatedReadDirError": template("AnnotatedError", {
                    "Error": type(ref("ReadDirError")),
                }),
                "AnnotatedReadFileError": template("AnnotatedError", {
                    "Error": type(ref("ReadFileError")),
                }),
                "AnnotatedMkdirError": template("AnnotatedError", {
                    "Error": type(ref("MkdirError")),
                }),
                "AnnotatedUnlinkError": template("AnnotatedError", {
                    "Error": type(ref("UnlinkError")),
                }),
                "AnnotatedWriteFileError": template("AnnotatedError", {
                    "Error": type(ref("WriteFileError")),
                }),
                "CreateWriteStreamData": group({
                    "path": member(er("common", "Path")),
                    "createContainingDirectories": member(bln()),
                }),
                // "AnnotatedReadFileError": group({
                //     "path": member(str()),
                //     "error": member(taggedUnion({
                //         "no entity": nullType(),
                //         "is directory": nullType(),
                //         "unknown": type(group({
                //             "message": member(str())
                //         })),
                //     }))
                // }),
                "DirNodeData": grp({
                    "path": member(str()),
                    "type": member(taggedUnion({
                        "directory": nullType(),
                        "file": nullType(),
                        "unknown": nullType(),
                    })),
                }),
                "MkdirError": taggedUnion({
                    "no entity": nullType(),
                    "exists": nullType(),
                    "unknown": ['type', grp({
                        "message": member(str())
                    })],
                }),
                "Mkdir_Data": grp({
                    "path": member(er("common", "Path")),
                    "createContainingDirectories": member(bln()),
                }),
                "Mkdir_Result": template("Result", {
                    "Error": type(ref("AnnotatedMkdirError")),
                    "Success": nullType(),
                }),
                "ReadDirectory_Data": grp({
                    "path": member(er("common", "Path")),
                }),
                "ReadDirectory_Result": template("Result", {
                    "Error": type(ref("AnnotatedReadDirError")),
                    "Success": type(dictionary(ref("DirNodeData"))),
                }),

                "ReadDirectory_Success": grp({}),
                "ReadDirError": taggedUnion({
                    "no entity": nullType(),
                    "is not directory": nullType(),
                    "unknown": ['type', grp({
                        "message": member(str())
                    })],
                }),
                "ReadFile_Data": template("Result", {
                    "Error": type(ref("AnnotatedReadFileError")),
                    "Success": type(str()),
                }),

                "ReadFile_Result": grp({}),
                "ReadFileError": taggedUnion({
                    "no entity": nullType(),
                    "is directory": nullType(),
                    "unknown": ['type', grp({
                        "message": member(str())
                    })],
                }),
                "RmdirError": taggedUnion({
                    "no entity": nullType(),
                    "not empty": nullType(),
                    "unknown": ['type', grp({
                        "message": member(str())
                    })],
                }),
                "UnlinkError": taggedUnion({
                    "no entity": nullType(),
                    "is directory": nullType(),
                    "unknown": ['type', grp({
                        "message": member(str())
                    })],
                }),
                "Unlink_Data": grp({
                    "path": member(er("common", "Path")),
                }),
                "Unlink_Result": template("Result", {
                    "Error": type(ref("AnnotatedUnlinkError")),
                    "Success": nullType(),
                }),

                "WriteFile_Result": template("Result", {
                    "Error": type(ref("AnnotatedWriteFileError")),
                    "Success": nullType(),
                }),

                "WriteFileData": grp({
                    "path": member(er("common", "Path")),
                    "data": member(str()),
                    "createContainingDirectories": member(bln()),
                }),
                "WriteFileError": taggedUnion({
                    "no entity": nullType(),
                    "is directory": nullType(),
                    "unknown": ['type', grp({
                        "message": member(str())
                    })],
                }),
            }),
            'interfaces': d({
                "WriteString": ['method', {
                    'data': ['type', string()],
                    'interface': ['null', null]

                }],
                "CreateWriteStream": ['method', {
                    'data': ['type', reference("CreateWriteStreamData")],
                    'interface': ['set', {
                        'interface': "WriteString"
                    }]
                }],
                "StreamConsumer": ['group', {
                    'members': d({
                        "onData": ['method', {
                            'data': ['type', string()],
                            'interface': ['null', null],
                        }],
                        "onEnd": ['method', {
                            'data': ['null', null],
                            'interface': ['null', null],
                        }],
                    }),
                }],
                "Reader": ['group', {
                    'members': d({
                        "init": ['method', {
                            'data': ['null', null],
                            'interface': ['set', {
                                'interface': "StreamConsumer"
                            }],
                        }],
                        "onError": ['method', {
                            'data': ['type', reference("AnnotatedReadFileError")],
                            'interface': ['null', null],
                        }],
                    })
                }]
            }),

        },
        'functions': d({
            "MakeDirectory": _function(reference("Mkdir_Data"), reference("Mkdir_Result"), true),
            "ReadDirectory": _function(reference("ReadDirectory_Data"), reference("ReadDirectory_Result"), true),
            "Unlink": _function(reference("Unlink_Data"), reference("Unlink_Result"), true),
        }),
        'callbacks': d({
            "GetFile": {
                'data': ['type', externalReference("common", "Path")],
                'interface': "Reader"
            }
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({
            "createWriteStream": {
                'definition': ['interface', {
                    'interface': "CreateWriteStream"
                }],
                'type': ['constructor', {
                    'configuration data': ['null', null],
                    // 'configuration data': ['type', group({
                    //     'context path': member(er("common", "Path")),
                    // })],
                    'dependencies': d({
                        "onError": ['procedure', ['type', reference("AnnotatedWriteFileError")]],
                    }),
                }]
            },
            "getFile": {
                'definition': ['callback', {
                    'callback': "GetFile"
                }],
                'type': ['reference', null]
            },
            "makeDirectory": {
                'definition': ['function', {
                    'function': "MakeDirectory",
                    'async': true,
                }],
                'type': ['reference', null]
            },
            "readDirectory": {
                'definition': ['function', {
                    'function': "ReadDirectory",
                    'async': true,
                }],
                'type': ['reference', null]
            },
            "unlink": {
                'definition': ['function', {
                    'function': "Unlink",
                    'async': true,
                }],
                'type': ['reference', null]
            }
        })
    },
}