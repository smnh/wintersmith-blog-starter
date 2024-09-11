import type { Model } from "@stackbit/types";

export const person: Model = {
    type: 'data',
    name: 'person',
    label: 'Person',
    filePath: 'contents/authors/{slug}.json',
    fields: [
        {
            type: 'string',
            name: 'name',
            required: true,
        },
        {
            type: 'string',
            name: 'email',
        },
        {
            type: 'text',
            name: 'bio',
        }
    ]
}
