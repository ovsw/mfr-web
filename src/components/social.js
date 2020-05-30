/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <>
      <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a></li>
      <li><a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a></li>
      {/* <li><a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /></a></li> */}
    </>
  )
}

export default SocialLinks
