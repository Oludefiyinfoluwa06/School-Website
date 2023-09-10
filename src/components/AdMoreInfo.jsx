import React from 'react'
import { MoreInfo } from '../constants'

const AdMoreInfo = () => {
  return (
    <div className='ad-more'>
        <h2>More Information:</h2>
        <div className="ad-more-info">
            {MoreInfo.map(info => (
                <div className="more-info" key={info.id}>
                    <p className='title'>{info.title}</p>
                    <p>{info.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AdMoreInfo
