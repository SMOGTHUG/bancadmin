import React from 'react'
import image6 from '../../images/image6.png'

const Blog = () => {
  return (
    <section className='loan'>
                <div className="loan-content">
                    <h2 className="loan-title">Getting Started is Easy</h2>
                    <p>No queing or appointment required</p>

                    <ol>
                        <li>
                            <h5>Download App</h5>
                            <p>on play store or app store</p>
                        </li>
                        <li>
                            <h5>Tell us about your company</h5>
                            <p>Like what you do and any shareholders</p>
                        </li>
                        <li>
                              <h5>Scan your id and take a selfie</h5>
                              <p>To securely verify who you are.</p>
                        </li>
                        <li>
                            <h5>most accounts approved in minutes</h5>
                            <p>Sometimes we ask for more information</p>
                        </li>
                    </ol>

                    <ul>
                        <li>
                            <h5>You're up and running</h5>
                            <p>your account is ready to go, we'll get your <br/>card ready in a couple of days</p>
                        </li>
                    </ul>

                    <div>
                       <figure className="loan-banner loan">
                          <img src={image6} width={300} height={200} alt="unsplashage" />
                       </figure>
                    </div>
                </div>
        

    </section>
  )
}

export default Blog