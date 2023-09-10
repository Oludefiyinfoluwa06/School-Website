import React, { useState, useEffect } from 'react'
import { testimonials } from '../constants'
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Testimonials = () => {
  const [people] = useState(testimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, people])
  
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => (
      clearInterval(slider)
    )
  }, [index])
  

  return (
    <div className="content">
      <h1>What our Students say</h1>
      <div className="testimonials">
        {testimonials.map((test, indexTest) => {
          const { id, icon, image, name, testimonial } = test;
          let position = "nextSlide";
          if (indexTest === index) {
            position = "activeSlide";
          }
          if (indexTest === index - 1 || (index === 0 && indexTest === people.length - 1)) {
            position = "lastslide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} />
              <h3>{name}</h3>
              <p>{testimonial}</p>
              <div className="icon">
                {icon}
              </div>
            </article>
          )
        })}
      </div>
      {/* <div className="arrow-icons">
        <div className="icon1">
          <FaAngleLeft />
        </div>
        <div className="icon1">
          <FaAngleRight />
        </div>
      </div> */}
    </div>
  )
}

export default Testimonials