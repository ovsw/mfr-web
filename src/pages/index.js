/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React, {useEffect} from 'react' // eslint-disable-line
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
// import SEO from '../components/seo'
import {Link} from 'gatsby'
// modules

export default (props) => {
  const {data} = props
  const fundraiserEdges = data && data.allSanityFundraiser
  const fundraiserNodes = mapEdgesToNodes(fundraiserEdges)

  // useEffect(() => {
  //   // typeof window !== 'undefined' && window.fetch('/.netlify/functions/hello')
  //   //   .then(response => response.json())
  //   //   .then(console.log)

  //   typeof window !== 'undefined' && window.fetch('https://app.snipcart.com/api/products', {
  //     headers: {
  //       Accept: 'application/json',
  //       Authorization: 'Basic U1RfWWpRMVlqVTBNamt0TkRnM09DMDBabU0wTFRrNFlXTXRaRGhoTkdVek1EZGlPV00yTmpNM01qTTFPRFV5TXpVek1ETXpNVEV5Og=='
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(console.log)
  // })

  return (
    <>
      {/* <SEO seoTitle="Marianna's Fundraisers" /> */}
      <section>
        <Container>
          <Styled.h2>Fundraisers</Styled.h2>
          <ul>
            {fundraiserNodes.map(({content: {main: {name, slug}}}) => (
              <li key={slug.current}><Link to={`/${slug.current}/`}>{name}</Link></li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}

export const query = graphql`
query IndexFundraiserQuery {
  allSanityFundraiser {
    edges {
        node {
          content {
            main {
              slug {
                current
              }
              name
            }
          }
        }
      }
    }
  }
  `
