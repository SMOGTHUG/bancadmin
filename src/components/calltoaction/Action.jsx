import React from 'react';
import the1 from '../../images/the1.png';
import the2 from '../../images/the2.png';
import the3 from '../../images/the3.png';
import man1 from '../../images/man1.png';
import man2 from '../../images/man2.png';
import man3 from '../../images/man3.png';
import arrow from '../../images/arrow.png';
const Action = () => {
  return (
    <section className="">
                <h2 className="departments-title">Opening an Account for Your Business Has Never Been Easier </h2>
                <ul className="departments-list">
                    <li>
                        <div><img src={the1} alt="unsplashage" /></div>
                        <div className="easy-card">
                            <div>
                            <img src={man2} alt="unsplashage" />
                            </div>
                            <a href="#" className="card-banner">
                                <figure>
                                    
                                    <h3 className="card-title">Sign Up</h3>
                                </figure>
                            </a>
                            <p className="card-text">start your journey today and unlock a world of possibilities for your business</p>
                        </div>
                    </li>

                    <li>
                            <div>
                                <img src={arrow} alt="unsplashage" />
                            </div>
                    </li>

                    <li>

                        <div><img src={the2}  alt="unsplashage" /></div>
                        <div className="easy-card">
                            <a href="#" className="card-banner">
                            <div>
                            <img src={man3} alt="unsplashage" />
                            </div>
                                <figure>
                                    <h3 className="card-title">Provide KYC Information</h3>
                                </figure>
                            </a>
                            <p className="card-text">lets get to know you better just a few document required</p>
                        </div>
                    </li>

                    <li>
                            <div>
                                <img src={arrow} alt="unsplashage" />
                            </div>
                    </li>

                    <li>

                        <div><img src={the3} alt="unsplashage" /></div>
                        <div className="easy-card">

                            
                            <a href="#" className="card-banner">
                            <div>
                            <img src={man1} alt="unsplashage" />
                            </div>
                                <figure>
                                    <h3 className="card-title">Open Account</h3>
                                </figure>
                            </a>
                            <p className="card-text">Enjoy a range of financial solutions tailored for your business  c</p>
                        </div>
                    </li>
                </ul>
            </section>
  )
}

export default Action