import React from 'react'
import contactImage from '../Assets/pexels-photo-280453.jpeg'
import '../ForStyles/Contact.css'

function Contact() {
  return (
    <div className="contact">
    <div style={{backgroundImage: `url(${contactImage})`}}></div>
     <div className='contact-content'>
     <h1> Contact Us</h1>
     <form id='name' method='POST'>
      <label>Full Name</label>
      <input type='text' placeholder='Enter Full Name'/>
      <label>Email</label>
      <input type='email' placeholder='Enter Email' name='email'/>
      <label>Message</label>
      <textarea placeholder='Enter Your Message' type='text'></textarea>
       
      <button type='submit'>Send Message</button>

     </form>
           
     </div>
    </div>
  )
}

export default Contact
