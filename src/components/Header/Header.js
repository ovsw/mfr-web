/** @jsx jsx */
import {jsx, Container, Styled} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import Nav from './Nav'

const Header = () => {
  return (
    <header sx={headerStyles}>
      <Container>
        <div className='navContainer'>
          <Link to='/' className='logo'>
            Marianna's Fundraisers
          </Link>
          <Nav />
        </div>
      </Container>
    </header>
  )
}

export default Header

const headerStyles = {
  mt: 5,
  '.navContainer': {
    px: [2, null, 0],
    display: 'flex',
    justifyContent: ['center', 'space-between'],
    flexWrap: 'wrap'
  },
  '.logo': {
    fontWeight: '900',
    fontFamily: 'heading',
    lineHeight: '1',
    pb: '1.75rem',
    textAlign: 'center',
    fontSize: [4, 5, 6, 7],
    color: 'black',
    textDecoration: 'none',
    ':hover': {textDecoration: 'underline'}
  }
}
