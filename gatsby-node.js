/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error("Error !!!!!")
  }

  const articleTemplate = path.resolve("src/templates/article.js")
  const articles = result.data.allNodeArticle.nodes
  articles.forEach(article => {
    createPage({
      path: article.path.alias,
      component: articleTemplate,
      context: {
        id: article.id,
      },
    })
  })
}
