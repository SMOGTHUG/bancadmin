import React from 'react'
import './details.css';
import image9 from "../../images/image9.png";
import image11 from "../../images/image11.png";
import image12 from "../../images/image12.png";


const Details = () => {
  return (
    <section>
      <div className="departments">
        <div className='department-title'>
            <h2>The Financial Partner for Your Business</h2>

            <div  className='department-list'>
                <ul>
                    <div>
                    
                        <img src={image9} width={220} height={150} alt="unsplashage" />
                        <h3>Business Account</h3>
                        <p> Open an account for your business no <br/>matter the registeration status.</p>
                    
                    </div>
                    <div>
                    
                        <img src={image11}  width={220} height={150} alt="unsplashage" />
                        <h3>Business Loans</h3>
                        <p> Get easy to pay back loans for expansion <br/>and growth </p>
                    
                    </div>
                    <div>
                    
                        <img src={image12} width={220} height={150} alt="unsplashage" />
                        <h3>Invoice Generation</h3>
                        <p>Generate and share professional Invoice <br/>with your clients</p>
                    
                    </div>

                    <div>
                    
                        <img src={image12} width={220} height={150} alt="unsplashage" /> 
                         <h3>Invoice Generation</h3>
                         <p> Generate and share professional Invoice <br/>with your clients</p>
                    
                    </div>
                </ul>
            </div>

 
        </div>
    </div>
    </section>
  )
}

export default Details