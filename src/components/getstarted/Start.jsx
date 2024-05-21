import React from 'react';
import './start.css';
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import image8 from '../../images/image8.png'

const Start = () => {
  return (
    <section>

      <div className='start-parent'>
        <div className='start-title'>
          <h2>The Banca Blog</h2>
          <p>Products updates, Business growth tips, and all you need to know.</p>
        </div>
   
        <div className='start-list'>
          <ul>
            <div>
                    <img src={image3} width={300} height={200} alt="unsplashage" />
                <h6>10 Effective steps to start your Business in <br/>Nigeria</h6>
             </div>

             <div>
                        <img src={image4} width={300} height={200} alt="unsplashage" />
                    <h6>The complete guide to small business <br/>accounting (with step-by-step advice)</h6>
             </div>
             <div>
                        <img src={image8} width={300} height={200} alt="unsplashage" />
                     <h6>Net Profit Margin: what it is & how to <br/>calculate it</h6>
             </div>
          </ul>
        </div>
      </div>

</section>
  )
}

export default Start