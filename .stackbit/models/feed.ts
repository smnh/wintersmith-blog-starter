import type { Model } from "@stackbit/types";

export const feed: Model = {
    type: 'page',
    name: 'feed',
    label: 'Feed',
    singleInstance: true,
    hideContent: true,
    file: 'contents/feed.json',
    preview: () => ({
        title: 'Feed'
    }),
    fields: [
        {
            type: 'string',
            name: 'template',
            const: 'feed.pug',
            hidden: true
        },
        {
            type: 'string',
            name: 'filename',
            const: 'feed.xml',
            hidden: true
        }
    ]
}
