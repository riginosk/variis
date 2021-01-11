const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const brandPage = path.resolve('./src/templates/brand/brand.js')
    const instructorPage = path.resolve('./src/templates/instructor/instructor.js')

    resolve(
      graphql(
        `
          {
            allContentfulBrand {
              edges {
                node {
                  brandName
                  slug
                }
              }
            }
            allContentfulInstructor {
              edges {
                node {
                  slug
                  instructorName
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

        const brands = result.data.allContentfulBrand.edges
        brands.forEach(brand => {
          createPage({
            path: `/${brand.node.slug}/`,
            component: brandPage,
            context: {
              slug: brand.node.slug,
            },
          })
        })

        const instructors = result.data.allContentfulInstructor.edges
        instructors.forEach(instructor => {
          createPage({
            path: `/${instructor.node.slug}/`,
            component: instructorPage,
            context: {
              slug: instructor.node.slug,
            },
          })
        })

        
      })
    )
  })
}
