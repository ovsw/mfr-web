/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, {useState, useEffect} from 'react' // eslint-disable-line

const ProductRow = (props) => {
  const {
    productId,
    price,
    addToTotalSales,
    productRef: {
      id,
      content: {
        main: {
          name,
          image
        }
      }
    }
  } = props

  const [numberSold, setNumberSold] = useState(-1)
  const [salesTotal, setSalesTotal] = useState(-1)

  // console.log(props)

  useEffect(() => {
    // TODO: check that the product actually exists in Snipcart before requesting, or provide a way to read the error.
    const auth = `${process.env.GATSBY_SNIPCART_API_SECRET_KEY}:`

    if (typeof window !== 'undefined' && numberSold === -1) {
      window.fetch(`https://app.snipcart.com/api/products/${productId}`, {
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${window.btoa(auth)}`
        }
      })
        .then(
          response => {
            if (!response.ok) {
            // make the promise be rejected if we didn't get a 2xx response
              throw new Error('Not 2xx response')
            } else {
            // go the desired response
              return response.json()
            }
          }
        )
        .then(productData => {
          setNumberSold(productData.statistics.numberOfSales)
          setSalesTotal(productData.statistics.totalSales)
          if (productData.statistics.totalSales > 0) { addToTotalSales(productData.statistics.totalSales) }
        })
        .catch((error) => {
          setNumberSold(-2)
          setSalesTotal(-2)
          console.error('Snipcart API Error:', error)
        })
    }
  })

  // const productStatsData = (numberSold) => {
  //   switch (numberSold) {
  //     case (-2):
  //       return 'error'
  //     case (-1):
  //       return 'loading'
  //     default:
  //       return numberSold
  //   }
  // }

  return (
    <>
      {name} {' - '}
      <span>${price}</span> {' '}&nbsp;&nbsp;
      # sold:
      {(numberSold === -1) && 'loading'}
      {(numberSold > -1) && numberSold}
      {(numberSold === -2) && 'error: product not found in shop.'} - {' '}

      Total sales:
      {(salesTotal === -1) && 'loading'}
      {(salesTotal > -1) && ` ${salesTotal}`}
      {(salesTotal === -2) && 'error'}
    </>
  )
}

export default ProductRow
