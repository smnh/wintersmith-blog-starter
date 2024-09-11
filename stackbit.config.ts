import {
    defineStackbitConfig,
    Document,
    DocumentWithSource,
    DocumentStringLikeFieldNonLocalized,
    SiteMapEntry,
    SiteMapOptions
} from "@stackbit/types";
import { DocumentContext , GitContentSource } from "@stackbit/cms-git";
import { models } from "./.stackbit/models";

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'custom',
    nodeVersion: '18',
    devCommand: 'wintersmith preview --port {PORT}',
    experimental: {
      ssg: {
          name: 'Wintersmith'
      }
    },
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['contents'],
            setFileIdsOnStart: true,
            useFileIds: true,
            models: models,
            assetsConfig: {
                referenceType: 'relative',
                assetsDir: 'contents',
                uploadDir: 'images'
            }
        })
    ],
    sitemap: ({ documents }: SiteMapOptions): SiteMapEntry[] => {
        return documents.map((document: DocumentWithSource & Document<DocumentContext>): SiteMapEntry => {
            if (document.modelName === 'feed') {
                return {
                    document,
                    urlPath: '/',
                    isHomePage: true
                }
            } else if (document.modelName === 'article') {
                return {
                    document,
                    urlPath: '/articles/' + (document.fields._filePath_slug as DocumentStringLikeFieldNonLocalized).value
                }
            } else if (document.modelName === 'archive') {
                return {
                    document,
                    urlPath: '/archive.html'
                }
            }
            return null;
        }).filter(Boolean)
    },
})
