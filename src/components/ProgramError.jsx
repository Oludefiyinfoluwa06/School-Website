import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ProgramError = () => {
    const error = useRouteError();

  return (
    <div className='program-error'>
      <p>Error! {error.message}</p>
      <p>Back to the <NavLink to='/'>Homepage</NavLink></p>
    </div>
  )
}

export default ProgramError