/** @jsx jsx */
import {jsx} from 'theme-ui'
import React from 'react' // eslint-disable-line
// import SEO from '../components/seo'
import RenderModules from '../lib/renderModules'

const Page = ({path, pageContext}) => {
  // console.log(path, pageContext)

  const {
    main: {
      modules,
      slug
    },
    meta
  } = pageContext

  return (
    <>
      {/* <SEO metaInfo={meta} pagePath={slug.current} /> */}
      {RenderModules(modules)}
    </>
  )
}

export default Page
