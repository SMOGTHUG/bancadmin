import React from 'react'
import './about.css';
import image7 from '../../images/image7.png'

const About = () => {
  return (
    <section>
        <div className='about-parent'>
           <div>
                <img src={image7} width={400} height={500} alt="unsplashage" />
           </div>
        <div className='about-title'>
                <h2>More than Just a Bank</h2>
                <p>it's how you run your business</p>

            <ul>
                <li>
                    <h4>Business Account Opening</h4>
                    <p>We know how busy you are, so we've made things easy, you <br/>can open and manage your business account on banca, <br/>without the administrative burden and paperwork.</p>
                </li>

                <li>
                    <h4>Seamless Money Transfer</h4>
                    <p>You can tgransfer money at the speed of light on banca, this<br/> means you can pay supplier, employee and business<br/> partners without stress</p>
                </li>

                <li>
                    <h4>Access To quick loan</h4>
                    <p>We know how busy you are, so we've made things easy, you <br/>can open and manage your business account on banca, <br/>without the administrative burden and paperwork.</p>
                </li>

                

                <li>
                    <h4>Cash flow management</h4>
                    <p>Create and send professional invoices, track payments and <br/> your cashflow with Banca</p>
                </li>

                <li>
                    <h4>Seamless point of sales (pos) requests</h4>
                    <p>You can request POS on banca qith a few clicks <br/>and we will bring it to you, we have made it easy for businesses<br/>to accept payments and track sales</p>
                </li>
            </ul>

        </div>
    </div>
</section>
  )
}

export default About