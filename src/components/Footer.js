/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'

import SocialLinks from '../components/social'

import {FaPhone, FaMapMarker, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer sx={{
      py: 6,
      borderTop: '1px solid',
      borderColor: 'gray.5',
      bg: 'dark',
      color: 'white',
      a: {
        color: 'white'
      }
    }}
    >
      <Container sx={{variant: ['utils.textCenter']}}>
        <div sx={footerContentStyles}>
          <div className='column' sx={{textAlign: ['inherit', null, 'left'], mb: [4, null, 0]}}>
            <h6>Marianna's Fundraisers</h6>
            <p>Delgrosso Foods Inc.</p>
            <ul sx={{variant: 'lists.reset', li: {mb: 4, a: {variant: 'utils.noUnderline'}, svg: {mr: 2}}}}>
              <li>
                <FaMapMarkerAlt />
                632 Sauce Factory Drive<br />
                Tipton, Pennsylvania 16684
              </li>
              <li>
                <a href='mailto:contact@mariannasfundraisers.com'><FaEnvelope />contact@mariannasfundraisers.com</a>
              </li>
              <li>
                <a href='tel:+1-800-521-5880'><FaPhone />+1-800-521-5880</a>
              </li>
            </ul>
          </div>
          <div className='column'>
            <h6>Info</h6>
            <ul sx={{
              textAlign: 'left',
              mx: 'auto',
              width: ['full', null, '200px'],
              li: {
                display: ['inline-block', null, 'block'],
                pb: 4
              },
              a: {
                display: 'inline-block',
                mx: 2
              }
            }}
            >
              <li><Link to='/terms-and-conditions/'>Terms &amp; Conditions</Link></li>
              <li><Link to='/privacy-policy/'>Privacy Policy</Link></li>
              <li><Link to='/contact/'>Contact</Link></li>
            </ul>
          </div>
          <div className='column'>
            <h6>Social</h6>
            <ul sx={{
              variant: 'lists.reset',
              fontSize: 4,
              li: {
                display: ['inline-block', null, 'block']
              },
              a: {
                display: 'inline-block',
                mx: 2
              }
            }}
            >
              <SocialLinks />
            </ul>
          </div>

        </div>
        <p sx={{
          fontSize: 0
        }}
        >Copyright &copy;{new Date().getFullYear()} <a href='https://www.delgrossos.com' target='_blank' rel='noopener noreferrer'>Delgrosso Foods Inc.</a>, All Rights Reserved. | Website by <a href='https://ovswebsites.com' target='_blank' rel='noopener noreferrer'>OVS Websites</a>
        </p>
      </Container>
    </footer>
  )
}

export default Footer

const footerContentStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: 0,
  mb: 5,
  '.column': {
    width: ['full', null, '1/3']
  },
  h6: {
    fontSize: 1,
    mt: 0,
    mb: [2, null, 5]
  }
}
