import React from 'react'
import '../contact/contactfitness.css'

const ContactFitness = () => {
    return (
        <div className='fitnessallx1' >
           <div className='fitmain1'>
           <h1>Contact</h1>
           </div>
           
    <div className='fitnessall1'>
   
    <h1>CONTACT US</h1>
    <p>We are here to help. Please complete the short form below and we’ll get
back as soon as possible.</p>
  <div className='centerinputcf'>
  <input
  type="text"
  placeholder="name*"
  className='contactforminput1'
 
/>
    <input type="text"  placeholder='email*' className='contactforminput1'  
  
  />
   
    <input type="number"  placeholder='phonenumber*' className='contactforminput2'  
    
  />

  </div>
  <input type="text" placeholder='subject*' className='contactforminput3' 
  
  />
  <input type="text" placeholder='message*' className='contactforminput3' 
  
  /> 
   <button className='contactformbtn1'>send message</button>

    </div>
            
        </div>)
}

export default ContactFitness