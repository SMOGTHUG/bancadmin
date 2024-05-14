import React from 'react'
import image5 from '../../images/image5.png'

const Customer = () => {
  return (
    <section className="hero">
    <div className="container hero">

        

        <div className="hero-content">
            <h2 className="hero-title">Make it Official</h2>
            <p>enjoy seamless business registeration with banca</p>

            <ul>
                <li className="section-text">
                    <h4>It's Affordable</h4>
                    <p>We partnered with the Business hub to offer <br/>business registeration at the best price</p>
                </li>

                <li className="section-text">
                    <h4>It's Fast</h4>
                    <p>Only takes few minutes to apply</p>
                </li>

                <li className="section-text">
                    <h4>It's Safe</h4>
                    <p>Banca is powered by Sterling bank <br/>so you are in safe hands</p>
                </li>
            </ul>

        </div>
        <figure className="hero-banner">
             <img src={image5} width={400} height={500} alt="unsplashage" />
        </figure>
    </div>
</section>
  )
}

export default Customer