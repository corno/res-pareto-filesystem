import * as pl from "./temp_switchStatemenSupportingFunctions"

import { mkdir } from "../public/mkdir"
import { TWriteFileError } from "api-pareto-filesystem"

import * as pth from "path"

export function createContainingDirectories(
    path: string,
    onDone: () => void,
    onError: ($: TWriteFileError) => void
) {

    mkdir(
        {
            path: pth.dirname(path),
            createContainingDirectories: true,
        },
    ).execute(($) => {
        switch ($[0]) {
            case "success":
                pl.cc($[1], ($) => {
                    onDone()
                })
                break
            case "error":
                pl.cc($[1], ($) => {
                    const path = $.path
                    switch ($.error[0]) {
                        case "exists":
                            pl.cc($.error[1], ($) => {
                                //not a real error
                                onDone()
                            })
                            break
                        case "no entity":
                            pl.cc($.error[1], ($) => {
                                onError(["no entity", {}])
                            })
                            break
                        case "unknown":
                            pl.cc($.error[1], ($) => {
                                onError(["unknown", { message: $.message }])
                            })
                            break
                        default: pl.au($.error[0])
                    }

                })
                break
            default: pl.au($[0])
        }
    })
}
