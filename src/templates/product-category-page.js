/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
// import Layout from '../containers/layout'
// import TwoColumnsRightSidebar from '../components/two-columns-right-sidebar'
// import BlogPostPreviewList from '../components/blog-post-preview-list'

// import {toPlainText} from '../lib/helpers'

const CategoryPageTemplate = props => {
  const {data, errors, pageContext: {catCurrentPage, catNumPages, categorySlug}} = props
  const page = data && data.page

  const posts = data && data.posts
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  return (
    <>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO seoTitle={page.seoTitle || page.title || 'Untitled'} description={page.seoDescription || ''} />}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}

      {posts && (
        <>
          <p>products in category go here</p>
          {/*    <TwoColumnsRightSidebar title={page.title} noBlogLink>
         <BlogPostPreviewList title='Category Posts'
           rootSlug={categorySlug}
           nodes={postNodes}
           currentPage={catCurrentPage}
           numPages={catNumPages} />
       </TwoColumnsRightSidebar>} */}
        </>
      )}

    </>
  )
}

export default CategoryPageTemplate

export const query = graphql`
  query ProductCategoryPageTemplateQuery($categoryId: String!, $skip: Int!, $limit: Int!) {
    posts: allSanityProduct(
      filter: {categories: {elemMatch: {id: {eq: $categoryId}}}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          categories {
            title
          }
          images {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
          title {
            en
            ro
          }
          _rawBlurb
          slug {
            current
          }
        }
      }
    }
    page: sanityCategory(id: {eq: $categoryId}) {
      title
      seoTitle{
        en
        ro
      }
      seoDescription{
        en
        ro
      }
    }
  }

  
`
