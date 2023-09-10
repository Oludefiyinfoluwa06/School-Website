import React from 'react'
import ContactForm from './ContactForm'
import ContactAddress from './ContactAddress'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <ContactAddress />
      <ContactForm />
    </div>
  )
}

export default ContactUs
