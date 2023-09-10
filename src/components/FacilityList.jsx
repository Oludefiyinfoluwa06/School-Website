import React from 'react'
import { facilities } from '../constants'

const FacilityList = () => {
  return (
    <div className='facilities'>
        {facilities.map(fac => (
            <div className='facility' key={fac.id}>
                <h3>{fac.title}</h3>
                <img src={fac.image} alt={fac.title} />
                <p>{fac.text}</p>
            </div>
        ))}
    </div>
  )
}

export default FacilityList
