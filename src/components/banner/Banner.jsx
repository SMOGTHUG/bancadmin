import React from 'react'
import './banner.css';
import image6 from '../../images/image6.png'

const Banner = () => {
  return (
    <section>
    <div className='banner-parent'>
        <div className='banner-title'>
        <h2>Business Banking Built<br/> Specially For You.</h2>
          <p>Whether you have an established business or you just<br/>started selling online, Banca is your business growth<br/>Partner. Open an account, get loans for expansion &<br/> growth. enjoy seamless online and offline payment<br/> solution and much more.</p>
        </div>
        <div>
              <img src={image6} width={300} height={250} alt="unsplashage" />
        </div>
    </div>
</section>
  )
}

export default Banner