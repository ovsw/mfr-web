/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {localizeText} from '../lib/helpers'
import PortableText from './portableText'
import Img from 'gatsby-image'

const ProductDetailsPage = ({id, title, images, price, vendor, _rawBlurb, _rawBody, slug}) => {
  console.log(title)
  return (
    <Container sx={{py: 5}}>
      <div sx={{
        display: 'flex'
      }}
      >
        <div sx={{variant: 'layout.TwoCol'}}>
          <Img fluid={images[0].asset.fluid} alt={`${title}-image-01`} />
        </div>
        <div className='productText' sx={{variant: 'layout.TwoCol', pl: [4]}}>
          <h1>{localizeText(title)}</h1>
          <p>from {vendor.title}</p>
          <PortableText blocks={localizeText(_rawBody)} />

          <button
            sx={{variant: 'buttons.outline'}}
            className='snipcart-add-item'
            data-item-id={id}
            data-item-price={price}
            data-item-name={localizeText(title)}
            data-item-description={localizeText(_rawBlurb)}
            data-item-image={images[0].asset.fluid.src}
            data-item-url={'https://banatstore.netlify.com/' + slug.current + '/'}
          >
            {/* data-item-custom1-name={customField ? customField.name : null}
          data-item-custom1-options={this.createString(customField.values)}
          data-item-custom1-value={this.state.selected} */}
            Add to Order (${price})
          </button>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetailsPage
