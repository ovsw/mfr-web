/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {FaFileAlt} from 'react-icons/fa'

export default ({node}) => {
  // console.log(node)
  return (
    <a href={node.asset.url} rel='noopener noreferrer' className='contentButton' target='_blank'><FaFileAlt sx={{position: 'relative', top: '2px'}} />  {node.description}</a>
  )
}
