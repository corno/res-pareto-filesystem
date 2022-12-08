
export type TReadFileError =
| ["no entity", null]
| ["is directory", null]
| ["unknown", {
    readonly "message": string
}]