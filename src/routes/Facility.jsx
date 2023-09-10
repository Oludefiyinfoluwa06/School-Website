import React from 'react';

// components import
import FacilityList from '../components/FacilityList';
import Footer from '../components/Footer';

const Facility = () => {
  return (
    <>
      <div className="pages fac">
        <h2 className="title">Our Facilities</h2>
      </div>
      <FacilityList />
      <Footer />
    </>
  )
}

export default Facility