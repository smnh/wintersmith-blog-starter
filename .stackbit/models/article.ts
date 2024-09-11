import type { Model } from "@stackbit/types";

export const article: Model = {
    type: 'page',
    name: 'article',
    label: 'Article',
    hideContent: false,
    filePath: 'contents/articles/{slug}/index.md',
    fields: [
        {
            type: 'string',
            name: 'title',
            required: true,
        },
        {
            type: 'reference',
            name: 'author',
            models: ['person']
        },
        {
            type: 'date',
            name: 'date',
        },
        {
            type: 'string',
            name: 'template',
            const: 'article.pug',
            hidden: true
        }
    ]
}
