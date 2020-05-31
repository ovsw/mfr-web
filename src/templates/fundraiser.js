/** @jsx jsx */
import {jsx, Styled, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
// import SEO from '../components/seo'
// import RenderModules from '../lib/renderModules'

const Fundraiser = ({path, pageContext}) => {
  // console.log(pageContext)

  const {
    main: {
      fundraiserId,
      name,
      menu,
      organizer,
      slug
    }
  } = pageContext

  return (
    <section>
      <Container>
        {/* <SEO metaInfo={meta} pagePath={slug.current} /> */}
        <Styled.h2>{name}</Styled.h2>

        <p>Orgranizer Name: {organizer.content.main.name}</p>

        <Styled.h3>Menu:</Styled.h3>
        <ul sx={productList}>

          {menu.map(menuItem => {
            // console.log(menuItem)
            const {
              price,
              productRef: {
                id,
                content: {
                  main: {
                    name,
                    image
                  }
                }
              }
            } = menuItem

            console.log(image)

            return (
              <li key={id}>
                {name} {' - '}
                <span>${price}</span> {' '}&nbsp;&nbsp;
                <button
                  sx={{variant: 'buttons.outline'}}
                  className='snipcart-add-item'
                  data-item-id={`${fundraiserId.current}-${id}`}
                  data-item-price={price}
                  data-item-name={name}
                  data-item-description='short description here'
                  // data-item-image={images[0].asset.fluid.src}
                  data-item-url={'https://mfr.netlify.app/' + slug.current + '/'}
                >Add to Cart
                </button>
              </li>
            )
          })}

        </ul>
      </Container>
    </section>
  )
}

export default Fundraiser

const productList = {
  li: {
    py: 3,
    fontSize: 2
  }
}
