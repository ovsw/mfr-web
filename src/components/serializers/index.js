import React from 'react'
import {Link} from 'gatsby'

import Figure from './Figure'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Table from './Table'
import Embed from './Embed'
import File from './File'

import isAbsoluteURL from 'is-absolute-url'

import {GoLinkExternal} from 'react-icons/go'

const YTopts = {
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0
  }
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} opts={YTopts} />)
    },
    localFile: File,
    mytable: Table,
    iframeEmbed: Embed
  },
  marks: {
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const {href} = mark // blank is used for checkbox
      const isExternal = isAbsoluteURL(href)
      if (isExternal) {
        return <a href={href} className='externalLink' rel='noopener noreferrer' target='_blank'>{children} <GoLinkExternal /></a>
      } else {
        return <Link to={href}>{children}</Link>
      }
    }
  }
}

export default serializers
