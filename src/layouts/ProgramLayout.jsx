import React from 'react';
import { Outlet } from 'react-router-dom';

const Programs = () => {
  return (
    <>
      <div className="pages programs">
        <h2 className="title">Our Programs</h2>
          <p>Ignite your path to success and begin to explore your passion</p>
      </div>
      <Outlet />
    </>
  )
}

export default Programs