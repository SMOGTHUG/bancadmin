import React from 'react';
import './customer.css';
import image5 from '../../images/image5.png';

const Customer = () => {

    function handleLogin(e) {
   
    }

  return (
    <section>
    <div className='customer-parent'>
        <div className='customer-container'>
            <div className='customer-title'>
                <h2>Make it Official</h2>
                <p>enjoy seamless business registeration with banca</p>
            </div>

            <ul>
                <li>
                    <h4>It's Affordable</h4>
                    <p>We partnered with the Business hub to offer <br/>business registeration at the best price</p>
                </li>

                <li>
                    <h4>It's Fast</h4>
                    <p>Only takes few minutes to apply</p>
                </li>

                <li>
                    <h4>It's Safe</h4>
                    <p>Banca is powered by Sterling bank <br/>so you are in safe hands</p>
                </li>
            </ul>

            <button className='customer-btn' type='botton' onClick={handleLogin}>Get Started</button>

        </div>
        <div className='customer-pic'>
             <img src={image5} width={400} height={600} alt="unsplashage" />
        </div>
    </div>
</section>
  )
}

export default Customer