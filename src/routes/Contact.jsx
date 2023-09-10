import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <div className="pages contact">
        <h1 className="title">Contact Us</h1>
      </div>
      <div className="map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.493879395246!2d7.555965373590163!3d8.926553490587121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0f9db875403b%3A0x20bb27310124b188!2sLincoln%20college%20of%20science%20management%20and%20technology!5e0!3m2!1sen!2sng!4v1690918491480!5m2!1sen!2sng" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default Contact
