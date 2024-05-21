import React from 'react'
import { useState } from 'react';
import './mail.css';

const Mail = () => {
const [email, setEmail] = useState('');
function handleEmailRead(e) {
 setEmail (e.target.value)
    }

    function handleLogin(e) {
   
    }
  return (
    <section>
      <div className='mail-parent'>
        <div className='mail-container'>
          <h2>join our mailing list</h2>
          <h5>be the first to know all the exciting things we are bringing to banca</h5>
        </div>
         <div className='mail-form'>
            <form>
              <p className='username'><input type='email' placeholder='Enter your email' value={email} onChange={handleEmailRead} required /><span><button className='mail-btn' type='botton' onClick={handleLogin}>Subscribe</button></span></p>
            </form>
            <p className='mail-p'>By subscribing, you agree to receive marketing communications from Banca. You can unsubscribe anytime using the <br/>link in the
          
           footer or any of our emails. Please read our <a href=''>privacy policy</a></p>
         </div>
      </div>
    </section>
  )
}

export default Mail