
import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as rt from "../imp/implementation/runTests"

import * as exeLib from "lib-pareto-exe"


pe.runProgram(($, $i, $d) => {
    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {

            },
            callback: ($) => {
                rt.runTests(
                    $,
                )
            }
        }
    )
})
