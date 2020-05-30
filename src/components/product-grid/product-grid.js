/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line

import ProductCard from '../product-card'

const ProductGrid = ({productsNodes}) => {
  return (
    <ul sx={{
      variant: 'lists.reset',
      display: 'flex',
      flexWrap: 'wrap'
    }}
    >
      {productsNodes.map(product => (
        <li
          key={product.id} sx={{
            width: ['full', '1/2', '1/3'],
            mb: 5,
            display: 'flex'
          }}
        >
          <ProductCard {...product} />
        </li>
      ))}
    </ul>

  )
}

export default ProductGrid
