import React from 'react'
import '../contact/contactform.css'

function ContactForm() {
  return (
       <div className='contactformall'>
    <h1>CONTACT US</h1>
    <p>We are here to help. Please complete the short form below and we’ll get
back as soon as possible.</p>
  <div className='centerinputcf'>
  <input
  type="text"
  placeholder="name*"
  className='inputform1'
 
/>
    <input type="text"  placeholder='email*' className='inputform1'  
 
  />
   
    <input type="number"  placeholder='phonenumber*' className='inputform2'
 
  />

  </div>
  <input type="text" placeholder='subject*'  className='inputform3' 

  />
  <input type="text" placeholder='message*'  className='inputform3' 

  /> 
   <button className='contactformbtn'>send message</button>
</div>
  
  )
}

export default ContactForm