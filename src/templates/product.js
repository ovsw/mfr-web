/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import {toPlainText} from '../lib/helpers'

import SEO from '../components/seo'
// import Layout from '../containers/layout'

import ProductDetails from '../components/product-details'

const BlogPostTemplate = (props) => {
  const {data, errors, location} = props
  const product = data && data.product
  return (
    <>
      {errors && <SEO title='GraphQL Error' />}
      {/* {product && <SEO title={product.seoTitle || product.title || 'Untitled'} description={product.seoDescription || toPlainText(product._rawExcerpt)} image={product.mainImage} />} */}

      {errors && (
        <>
          <GraphQLErrorList errors={errors} />
        </>
      )}

      {product && (
        <>
          <ProductDetails {...product} />
          {/*  <TwoColumnsRightSidebar
         path={location.pathname}
         header={<BlogPageHeader title='Blog' />}
         mainContent={<Blogproduct {...product} />}
         sidebarContent={<Sidebar />}
        /> */}
        </>
      )}
    </>
  )
}

export default BlogPostTemplate

// export const query = graphql`
//   query ProductTemplateQuery($id: String!) {
//     product: sanityProduct(id: {eq: $id}) {
//       id
//       categories {
//         _id
//         title
//       }
//       images {
//         asset {
//           url
//           fluid(maxWidth: 700) {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//       title {
//         en
//         ro
//       }
//       price
//       vendor{
//         title
//       }
//       slug {
//         current
//       }
//       _rawBlurb(resolveReferences: {maxDepth: 5})
//       _rawBody(resolveReferences: {maxDepth: 5})
//       seoTitle{
//         en
//         ro
//       }
//       seoDescription{
//         en
//         ro
//       }
//     }
//   }
// `
