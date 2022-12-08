
export type TRmdirError =
| ["no entity", null]
| ["not empty", null]
| ["unknown", {
    readonly "message": string
}]