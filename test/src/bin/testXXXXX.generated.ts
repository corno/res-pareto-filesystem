import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_createWriteStream } from "../modules/main/createWriteStream.p"
import { test as main_getFile } from "../modules/main/getFile.p"
import { test as main_makeDirectory } from "../modules/main/makeDirectory.p"
import { test as main_readDirectory } from "../modules/main/readDirectory.p"
import { test as main_unlink } from "../modules/main/unlink.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "createWriteStream": main_createWriteStream,
        "getFile": main_getFile,
        "makeDirectory": main_makeDirectory,
        "readDirectory": main_readDirectory,
        "unlink": main_unlink,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))