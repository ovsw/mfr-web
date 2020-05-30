import React from 'react'
import Modules from '../components/modules'

const RenderModules = (modules) => {
  if (modules) {
    return modules.map((module) => {
      return (
        <React.Fragment
          key={module._key}
        >
          <Modules
            type={module._type}
            reactModule={module}
          />
        </React.Fragment>
      )
    })
  }
}
export default RenderModules
