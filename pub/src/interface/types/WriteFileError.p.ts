
export type TWriteFileError =
    | ["no entity", null]
    | ["is directory", null]
    | ["unknown", {
        readonly "message": string
    }]