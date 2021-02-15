import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generatePostApi = () => {
  const contentDir = `${rootDir}/content/posts`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/posts.json`
  const metaFile = `${apiDir}/posts-meta.json`
  const pages = siteConfig.posts.perPage

  createAll(contentDir, allFile, apiDir).then((all) => {
    const totalPages = createPagination(pages, all, `${apiDir}/posts`)
    createMeta({ totalPages: totalPages }, metaFile)
  })
}
export default generatePostApi
