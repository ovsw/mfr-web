import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div id='snipcart' data-api-key={process.env.GATSBY_SNIPCART_API_KEY} />
        <div
          key='body'
          id='___gatsby'
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        <script src='https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js' data-api-key={process.env.GATSBY_SNIPCART_API_KEY} />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
