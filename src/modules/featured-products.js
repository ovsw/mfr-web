/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React from 'react' // eslint-disable-line

import ProductGrid from '../components/product-grid'

const FeaturedProducts = (props) => {
  return (
    <section sx={{
      py: 5
    }}
    >
      <Container>
        <Styled.h2 sx={{
          mb: [5],
          fontWeight: 'normal'
        }}
        >Featured Products
        </Styled.h2>
        <ProductGrid {...props} />
      </Container>
    </section>
  )
}

export default FeaturedProducts
