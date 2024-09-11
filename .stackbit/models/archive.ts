import type { Model } from "@stackbit/types";

export const archive: Model = {
    type: 'page',
    name: 'archive',
    label: 'Archive',
    singleInstance: true,
    hideContent: true,
    file: 'contents/archive.json',
    preview: () => ({
        title: 'Archive'
    }),
    fields: [
        {
            type: 'string',
            name: 'template',
            const: 'archive.pug',
            hidden: true
        }
    ]
}
