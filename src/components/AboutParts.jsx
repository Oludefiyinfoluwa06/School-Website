import React from 'react';
import { AboutPart } from '../constants';

const AboutParts = () => {
  return (
    <div className='parts'>
      {AboutPart.map(part => (
        <div className="part" key={part.id}>
            <div className="image">
              <img src={part.image} alt={part.title} />
            </div>
            <h3>{part.title}</h3>
            <p>{part.text}</p>
        </div>
      ))}
    </div>
  )
}

export default AboutParts