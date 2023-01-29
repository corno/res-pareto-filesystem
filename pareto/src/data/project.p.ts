import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'name': "res-pareto-filesystem",

    'author': "Corno",
    'description': "a pareto wrapper around the fs library of NodeJS",
    'license': "ISC",

    'type': ['resource',  {
        'devDependencies': d({
            "@types/node": {},
        }),
    }],
    'modules': d({
        "main": {
            'definition': api,
        },
    }),
    'main': "main",
    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'testdependencies': d({}),
}