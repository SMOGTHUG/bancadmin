import React from 'react'
import image6 from '../../images/image6.png'

const Banner = () => {
  return (
    <section className="about">
    <div className="about-content about">
        <div>
        <h2 className="about-title">Business Banking Built<br/> Specially For You.</h2>
          <p>Whether you have an established business or you just<br/>started selling online, Banca is your business growth<br/>Partner. Open an account, get loans for expansion &<br/> growth. enjoy seamless online and offline payment<br/> solution and much more.</p>

        </div>
            <figure className="about-banner">
                <img src={image6} width={300} height={300} alt="unsplashage" />
            </figure>
        
    </div>
</section>
  )
}

export default Banner