
export type TMkdirError =
| ["no entity", null]
| ["exists", null]
//| ["is directory", null]
| ["unknown", {
    readonly "message": string
}]
