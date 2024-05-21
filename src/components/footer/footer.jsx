import React from 'react'
import logo from '../../images/logo.png'
import './footer.css';

const Footer = () => {
  return (
    <div className='foot-parent'>
        <div >
            <h4>Company</h4>
            <div  className='container-1'>
            <p>About</p>
            <p>Blog</p>
            <p>Features</p>
            <p>Faqs</p>
            <p>Partners</p>
            </div>

            <div className='container-2'>
                <span className="footer-logo"><img src={logo} height={50} width={100} alt="unsplashage" /></span>
            </div>

            <div className='container-3'><p>Copyright @ 2023 Sterling Bank LTD</p></div>
        </div>

        <div>
            <h4>Downloads</h4>
        </div>

        <div>
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
        </div>

        <div>
            <h4>Contact us</h4>
            <p>Tel +234 908 734 5679</p>
        </div>
    </div>
  )
}

export default Footer