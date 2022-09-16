
import { TWriteFileError } from "api-pareto-filesystem"

import * as pth from "path"
import { mkdirImp } from "./mkdirImp.p"

export function createContainingDirectories(
    path: string,
    onDone: () => void,
    onError: ($: TWriteFileError) => void
) {

    mkdirImp(
        pth.dirname(path),
        { recursive: true },
        (err) => {
            if (err === null) {
                onDone()

            } else {

                if (err !== null) {
                    const errCode = err.code
                    const errMessage = err.message
                    switch (errCode) {
                        //what is the error code for exists????
                        // case "???":
                        //     onDone()
                        //     break
                        case "ENOENT":
                            onError(["no entity", null])
                            break
                        default: {
                            onError(["unknown", { message: errMessage }])
                        }
                    }
                }
            }
        }
    )
}
