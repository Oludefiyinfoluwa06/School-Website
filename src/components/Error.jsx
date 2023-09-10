import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Error! This page cannot be found</p>
      <p>Back to the <NavLink to='/'>Homepage</NavLink></p>
    </div>
  )
}

export default Error