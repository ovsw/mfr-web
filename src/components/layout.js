/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/snipcart.css'
import '../styles/base.css'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <section sx={{
        variant: ['styles']
      }}
      >
        <Container sx={{}}>
          <div sx={{border: '1px solid black', px: 5, py: 4, mt: '2rem!important'}}>

            <p>This website is in development.</p>
            <p>We're working hard to bring you authenitc, hand-crafted, culture-specific souveniers and gifts from Romania's Banat region.</p>
          </div>
        </Container>
      </section>
      {children}
      <Footer />
    </>
  )
}

export default Layout
