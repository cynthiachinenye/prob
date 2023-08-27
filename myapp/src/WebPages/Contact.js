import React from 'react'
import contactImage from '../Assets/pexels-photo-280453.jpeg'

function Contact() {
  return (
    <div className="contact">
    <div style={{backgroundImage: `url($(contactImage))`}}></div>
     <h1> Contact Us</h1>
     <form id='name' method='POST'>
      <label>Full Name</label>
      <input type='text' placeholder='Enter Full Name'/>
      <label>Email</label>
      <input type='email' placeholder='Enter Email' name='email'/>
      <label>Message</label>
      <textarea placeholder='Enter Your Message' type='text'></textarea>
     
     </form>
      
    </div>
  )
}

export default Contact
