/** @jsx jsx */
import {jsx, Container} from 'theme-ui'
import React from 'react' // eslint-disable-line
import {localizeText} from '../../lib/helpers'

import BlockContent from '@sanity/block-content-to-react'

import serializers from '../serializers'

const LocaleStandardBlockContent = ({data}) => {
  const {text} = localizeText(data)
  console.log(localizeText(data))
  return (
    <section sx={{variant: ['sections.hpSection', 'styles']}}>
      <Container>
        <BlockContent blocks={text} serializers={serializers} />
      </Container>
    </section>
  )
}

export default LocaleStandardBlockContent
