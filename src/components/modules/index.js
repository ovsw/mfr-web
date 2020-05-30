import React from 'react'

import LocaleStandardBlockContent from './localeStandardBlockContent'

const Modules = ({reactModule, type}) => {
  switch (type) {
    case 'localeStandardBlockContent':
      return <LocaleStandardBlockContent data={reactModule} />
    default:
      return (<span>{type}</span>)
  }
}

export default Modules
