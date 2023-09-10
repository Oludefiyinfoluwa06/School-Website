import React from 'react';
import { FaLocationArrow, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="address">
        <div className="add">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <p>22, 2nd Avenue, Kemta Estate, <br />Idi-Aba, Abeokuta, Ogun State</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaPhone />
          </div>
          <p>0815 231 4660 <br />0800 000 0000</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaLocationArrow />
          </div>
          <p>school-coe@edu.ng</p>
        </div>
    </div>
  )
}

export default ContactAddress
