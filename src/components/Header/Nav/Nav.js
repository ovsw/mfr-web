/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

const Nav = () => {
  return (
    <ul sx={navStyles}>
      {navItems.map(({url, text}) => (
        <li key='url'>
          <Link to={url} activeClassName='active'>{text}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav

const navItems = [
  {
    url: '/',
    text: 'Home'
  },
  {
    url: '/about/',
    text: 'About'
  },
  {
    url: '/contact/',
    text: 'Contact'
  }
]

const navStyles = {
  flex: '1',
  variant: 'lists.reset',
  display: 'flex',
  justifyContent: ['center', 'flex-end'],
  li: {
    display: 'flex',
    alignItems: 'center',
    mx: 3
  },
  'li a': {
    fontFamily: 'body',
    color: 'text',
    fontSize: 3,
    px: 3,
    '&.active': {
      color: 'primary'
    }
  }
}
