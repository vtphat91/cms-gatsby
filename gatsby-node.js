const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {

  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )

    resolve(
      graphql(
        `
          {
            allContentfulNavigationChild {
              edges {
                node {
                  id
                  url
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const templateProduct = path.resolve('./src/templates/product-content.js')
        const productContents = result.data.allContentfulNavigationChild.edges
        console.log(productContents);
        productContents.forEach((content, index) => {
          createPage({
            path: `${content.node.url}`,
            component: templateProduct,
            context: {
              url: content.node.url
            },
          })
        })
      })
    )   






  })
}
