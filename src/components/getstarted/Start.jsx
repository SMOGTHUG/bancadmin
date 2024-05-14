import React from 'react'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import image8 from '../../images/image8.png'

const Start = () => {
  return (
    <section className="blog">
    <h2 className="blog-title">The Banca Blog</h2>
    <p className="blog-title">Products updates, Business growth tips, and all you need to know.</p>
   <div>
        <ul className="blog-list">
            <li>
                <figure>
                    <img src={image3} width={300} height={200} alt="unsplashage" />
                </figure>

                <h6>10 Effective steps to start your Business in <br/>Nigeria</h6>
             </li>

             <li>
               
                    <figure>
                        <img src={image4} width={300} height={200} alt="unsplashage" />
                    </figure>

                    <h6>The complete guide to small business <br/>accounting (with step-by-step advice)</h6>
             </li>
             <li>
                     <figure>
                        <img src={image8} width={300} height={200} alt="unsplashage" />
                     </figure>

                     <h6>Net Profit Margin: what it is & how to <br/>calculate it</h6>
               

            
             </li>
        </ul>
   </div>
</section>
  )
}

export default Start