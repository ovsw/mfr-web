// const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const {format} = require('date-fns')

async function createProductPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityProduct(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
            categories {
              id
              title
              slug {
                current
              }
            }
          }
        }
      }
      allSanityCategory(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const productEdges = (result.data.allSanityProduct || {}).edges || []
  const categoryEdges = (result.data.allSanityCategory || {}).edges || []

  // create product pages
  productEdges
    // .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node // publishedAt
      // const dateSegment = format(publishedAt, 'YYYY/MM')
      // const path = `/blog/${dateSegment}/${slug.current}/`
      const path = `/${slug.current}/`

      reporter.info(`Creating product page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/product.js'),
        context: {id}
      })
    })

  // create blog pagination pages
  // const postsPerPage = 6
  // const numPages = Math.ceil(productEdges.length / postsPerPage)

  // Array.from({length: numPages}).forEach((_, i) => {
  //   const path = i === 0 ? '/blog' : `/blog/${i + 1}`
  //   reporter.info(`Creating main blog page: ${path}`)

  //   createPage({
  //     path,
  //     component: require.resolve('./src/templates/main-products-page.js'),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1
  //     }
  //   })
  // })

  // Product Category Pages with pagination

  let categoriesWithProductsInfo = [] // empty array that will contain objects, each object being a category and its posts

  categoryEdges.map(category => {
    const currentCatId = category.node.id
    const currentCatSlug = category.node.slug.current // get the slug of the current category
    let postsInThisCat = 0 // initialize empty array to hold all the posts in this category

    productEdges.map(post => { // go through all posts
      const postCatSlug = post.node.categories[0].slug.current
      if (postCatSlug === currentCatSlug) { postsInThisCat = postsInThisCat + 1 } // if the post is in this category, add it to postsInThisCat
    })

    // build the object that represents the category and all its posts
    const categoryWithItsPosts = {
      categoryId: currentCatId,
      categorySlug: currentCatSlug,
      categoryNumberOfPosts: postsInThisCat
    }
    // add this category
    categoriesWithProductsInfo = categoriesWithProductsInfo.concat(categoryWithItsPosts)
  })

  // now we have everything we need to create the pages for each category, with pagination
  categoriesWithProductsInfo.map(({categoryId, categorySlug, categoryNumberOfPosts}) => {
    const catPostsPerPage = 10
    const catNumPages = Math.ceil(categoryNumberOfPosts / catPostsPerPage)

    // crete the category's pages (with pagination)
    Array.from({length: catNumPages}).forEach((_, i) => {
      const categoryPath = i === 0 ? `/${categorySlug}` : `/${categorySlug}/${i + 1}`
      reporter.info(`Creating category page: ${categoryPath}`)

      createPage({
        path: categoryPath,
        component: require.resolve('./src/templates/product-category-page.js'),
        context: {
          limit: catPostsPerPage,
          skip: i * catPostsPerPage,
          catNumPages,
          catCurrentPage: i + 1,
          categoryId,
          categorySlug
        }
      })
    })
  })
}

async function createPages (graphql, actions, reporter) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            _rawContent(resolveReferences: {maxDepth: 9})
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = result.data.allSanityPage.edges || []

  pageEdges
    .forEach((edge, index) => {
      const path = `/${edge.node._rawContent.main.slug.current === 'home' ? '' : edge.node._rawContent.main.slug.current}/`

      reporter.info(`Creating page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/templates/page.js'),
        context: {...edge.node._rawContent}
      })
    })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createProductPages(graphql, actions, reporter)
  await createPages(graphql, actions, reporter)
}
