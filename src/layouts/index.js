import React from 'react'
import LayoutWrapper from '../components/layout'
import {hot} from 'react-hot-loader/root'
// import {Helmet} from 'react-helmet'

const Layout = (props) => (
  <>
    {/* <Helmet htmlAttributes={{lang: 'en'}}>
      <link rel='stylesheet' href='https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.css' />
    </Helmet> */}

    <LayoutWrapper>{props.children}</LayoutWrapper>
  </>
)

export default hot(Layout)
