import React from 'react';
import './action.css';
import the1 from '../../images/the1.png';
import the2 from '../../images/the2.png';
import the3 from '../../images/the3.png';
import man1 from '../../images/man1.png';
import man2 from '../../images/man2.png';
import man3 from '../../images/man3.png';
import arrow from '../../images/arrow.png';
const Action = () => {
  return (
    <section>
        <div className='action-title'>
            <h2>Opening an Account for Your Business Has Never <br/>Been Easier </h2>
            <div className='action-list'>
                <ul>
                    <div>
                            <p className='action'><img src={the1} width={20} height={70} alt="unsplashage" /></p>
                            <div className='action-container'>
                                
                                <p className='action-image'><img src={man2} width={50} height={50} alt="unsplashage" /></p>
                                
                                
                                    <h3>Sign Up</h3>
                                    <p>start your journey today and unlock a world of possibilities for your business</p>
                                
                            </div>
                    </div>

                    <div>
                                <img className='action-pic'  src={arrow} width={50} height={50} alt="unsplashage" />
                    </div>

                    <div>
                            <p className='action'><img src={the2} width={20} height={70}  alt="unsplashage" /></p>
                           <div className='action-container'>
                                <p className='action-image'><img src={man3} width={50} height={50} alt="unsplashage" /></p>  
                                    <h3>Provide KYC Information</h3>
                                    <p>lets get to know you better just a few document required</p>
                           </div>
                        
                    </div>

                    <div>
                                <img className='action-pic' src={arrow} width={50} height={50} alt="unsplashage" />    
                    </div>

                    <div>
                            <p className='action'><img src={the3} width={20} height={70} alt="unsplashage" /></p>
                        
                           <div className='action-container'>
                                <p><img src={man1} width={50} height={50} alt="unsplashage" /></p>
                                <h3>Open Account</h3>
                                <p>Enjoy a range of financial solutions tailored for your business</p>
                        
                           </div>
                    </div>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Action