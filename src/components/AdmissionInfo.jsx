import React from 'react'
import { Link } from 'react-router-dom'

const AdmissionInfo = () => {
  return (
    <div className="ad-info">
        <p>Expand your horizon and tailor your studies according to your interest and aspirations. It's your path to discover</p>
        <Link to="/programs">Discover what School has to offer you</Link>
    </div>
  )
}

export default AdmissionInfo
