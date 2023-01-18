import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as main_createWriteStream } from "../modules/main/createWriteStream.generated"
import { test as main_getFile } from "../modules/main/getFile.generated"
import { test as main_makeDirectory } from "../modules/main/makeDirectory.generated"
import { test as main_readDirectory } from "../modules/main/readDirectory.generated"
import { test as main_unlink } from "../modules/main/unlink.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'main': pr.wrapRawDictionary({
        'createWriteStream': main_createWriteStream,
        'getFile': main_getFile,
        'makeDirectory': main_makeDirectory,
        'readDirectory': main_readDirectory,
        'unlink': main_unlink,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))