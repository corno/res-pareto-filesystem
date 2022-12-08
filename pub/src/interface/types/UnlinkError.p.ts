
export type TUnlinkError =
| ["no entity", null]
| ["is directory", null]
| ["unknown", {
    readonly "message": string
}]