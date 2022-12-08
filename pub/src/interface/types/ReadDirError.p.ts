
export type TReadDirError =
| ["no entity", null]
| ["is not directory", null]
| ["unknown", {
    readonly "message": string
}]