/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  // Query Pages
  const pagesQuery = await graphql(`
  {
    allSanityFundraiser {
      edges {
        node {
          _rawContent(resolveReferences: {maxDepth: 9})
        }
      }
    }
  }
  `)

  if (pagesQuery.errors) {
    throw pagesQuery.errors
  }

  // console.log(pagesQuery)
  const fundraiserPages = pagesQuery.data.allSanityFundraiser.edges || []

  fundraiserPages.forEach((edge, index) => {
    const path = `/${edge.node._rawContent.main.slug.current}/`

    reporter.info(`Creating fundraiser page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/fundraiser.js'),
      context: {...edge.node._rawContent}
    })
  })
}
