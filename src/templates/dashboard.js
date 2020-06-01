/** @jsx jsx */
import {jsx, Styled, Container} from 'theme-ui'
import React, {useEffect, useState} from 'react' // eslint-disable-line
// import SEO from '../components/seo'
// import RenderModules from '../lib/renderModules'

import Product from '../components/dashboard/analytics/productRow'

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

  const [totalSales, setTotalSales] = useState(0)

  const addToTotalSales = (amountToAdd) => {
    const newTotal = totalSales + amountToAdd
    setTotalSales(newTotal)
  }

  return (
    <section>
      <Container>
        {/* <SEO metaInfo={meta} pagePath={slug.current} /> */}
        <Styled.h2>Sales Data Dashboard</Styled.h2>

        <p>For fundraiser: {name}</p>

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
            const productId = `${fundraiserId.current}-${id}`

            return (
              <li key={id}>
                <Product {...menuItem} productId={productId} addToTotalSales={addToTotalSales} />
              </li>
            )
          })}

        </ul>
        <h2>Total Sales across all products: ${totalSales}</h2>
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
