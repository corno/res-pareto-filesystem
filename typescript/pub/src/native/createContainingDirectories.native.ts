
import * as gthis from "../glossary"

import * as pth from "path"
import * as fs from "fs"

export function createContainingDirectories(
    path: string,
    onDone: () => void,
    onError: ($: gthis.T.WriteFileError) => void
) {

    fs.mkdir(
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
                        // case '???':
                        //     onDone()
                        //     break
                        case 'ENOENT':
                            onError(['no entity',  null])
                            break
                        default: {
                            onError(['unknown',  { message: errMessage }])
                        }
                    }
                }
            }
        }
    )
}
