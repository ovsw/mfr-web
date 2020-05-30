/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React, {useEffect} from 'react' // eslint-disable-line
import {graphql} from 'gatsby'
import {mapEdgesToNodes, localizeText} from '../lib/helpers'
import SEO from '../components/seo'

// modules
import FeaturedProducts from '../modules/featured-products'

export default (props) => {
  const {data} = props
  const productsEdges = data && data.homeProducts
  const productsNodes = mapEdgesToNodes(productsEdges)

  useEffect(() => {
    // typeof window !== 'undefined' && window.fetch('/.netlify/functions/hello')
    //   .then(response => response.json())
    //   .then(console.log)

    typeof window !== 'undefined' && window.fetch('https://app.snipcart.com/api/products', {
      headers: {
        Accept: 'application/json',
        Authorization: 'Basic U1RfWWpRMVlqVTBNamt0TkRnM09DMDBabU0wTFRrNFlXTXRaRGhoTkdVek1EZGlPV00yTmpNM01qTTFPRFV5TXpVek1ETXpNVEV5Og=='
      }
    })
      .then(response => response.json())
      .then(console.log)
  })

  return (
    <>
      <SEO seoTitle='My Banat Souvenirs' />

      <FeaturedProducts productsNodes={productsNodes} />
    </>
  )
}

export const query = graphql`
fragment SanityImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexProductsQuery {
    homeProducts: allSanityProduct {
      edges {
        node {
          id
          categories {
            _id
            title
          }
          title {
            en
            ro
          }
          images {
            asset {
              fixed(width: 400) {
                ...GatsbySanityImageFixed
              }
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
          slug {
            current
          }
          blurb {
            en
            ro
          }
          price
          vendor{
            title
          }
        }
      }
    }
  }
  
`
