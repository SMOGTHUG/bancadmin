import React from 'react'
import './details.css';
import image9 from "../../images/image9.png";
import image11 from "../../images/image11.png";
import image12 from "../../images/image12.png";


const Details = () => {
  return (
    <section>
      <div className="departments">
        <div >
            <h2 className="departments-title">The Financial Partner for Your Business</h2>

            <ul className="departments-list">
                <li>
                    <div className="departments-card">
                        <a href="#" className="card-banner">
                            <figure>
                                <img src={image9} width={200} height={200} alt="unsplashage" />
                            </figure>
                        </a>


                        <a href="#">
                            <h3 className="card-title">Business Account</h3>

                        </a>

                        <p className="card-text">
                           Open an account for your business no matter the registeration status 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="departments-card">
                        <a href="#">
                            <figure>
                            <img src={image11} width={200} height={200} alt="unsplashage" />
                            </figure>
                        </a>


                        
                            <h3 className="card-title">Business Loans</h3>

                        

                        <p className="card-text">
                          Get easy to pay back loans for expansion and growth 
                        </p>
                    </div>
                </li>
                <li>
                    <div className="departments-card">
                        <a href="#">
                            <figure>
                            <img src={image12} width={200} height={200} alt="unsplashage" /> 
                            </figure>
                        </a>


                        <a href="#">
                            <h3 className="card-title">Invoice Generation</h3>

                        </a>

                        <p className="card-text">
                          Generate and share professional Invoice with your clients
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </section>
  )
}

export default Details