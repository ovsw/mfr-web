/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import Img from 'gatsby-image'

import {localizeText} from '../../lib/helpers'

const ProductCard = ({vendor, blurb, slug, title, price, images}) => {
  return (
    <div sx={cardStyles}>
      <Link to={`/${slug.current}/`}>
        <Img fluid={images[0].asset.fluid} />
      </Link>
      <div className='cardContent'>
        <h3><Link to={`/${slug.current}/`}>{localizeText(title)}</Link></h3>
        <p className='shortDescription'>{localizeText(blurb)}</p>
        <div className='bottom'>
          <p>${price.toFixed(2)}</p>
          <Link sx={{variant: 'buttons.simpleAccent'}} to={`/${slug.current}/`}>Details</Link>
        </div>
      </div>

    </div>
  )
}

export default ProductCard

const cardStyles = {
  mx: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // border: '1px solid',
  // borderColor: 'textMuted',
  boxShadow: '0px 2px 4px rgba(130, 136, 148, 0.16), 0px 0px 1px rgba(130, 136, 148, 0.16)',
  '.cardContent': {
    p: 4
  },
  '.shortDescription': {
    color: 'textMuted'
  },
  '.bottom': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 4
  },
  h3: {
    m: 0,
    mb: 2,
    a: {
      variant: 'utils.noUnderline'
    }
  },
  p: {
    m: 0,
    mb: 2
  }
}
