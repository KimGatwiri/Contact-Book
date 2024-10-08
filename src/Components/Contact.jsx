import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div className="ContactForm">
      <h1>Contact-Book</h1>
     

      <form>
      <h2>Register Contact</h2>
    <div class="contactInputs" >
    <input type='text' placeholder='First Name'/>
    </div>
    <div class="contactInputs" >
    <input type='text' placeholder='Last Name'/>
    </div>
    <div class="contactInputs" >
    <input type='text' placeholder='email'/>
    </div>
    <div class="contactInputs" >
    <input type='text' placeholder='Phone number'/>
    </div>
    <div>
           <button>Add Contact</button>
           </div>
      </form>
      </div>
 
   
  )
  
}

export default Contact;