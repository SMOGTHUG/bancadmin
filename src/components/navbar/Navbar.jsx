import { useEffect, useState } from 'react';
import React from 'react'
import logo from '../../images/logo.png'
import './navbar.css';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleLogin(e) {
   
    }
  return (
    <section>
       

     <div className="navbar">
        <span className="nav-logo"><img src={logo} alt="unsplashage" /></span>
        <div className={`nav-item ${isOpen && "open"}`}>
            <a href="features">Features</a>
            <a href="blogs">Blogs</a>
            <a href="faqs">FAQs</a>
            <a href="services">Services</a>
            <button className="btn" type='botton' onClick={handleLogin}>open an account</button>
        </div>

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}> 
            <div className="bar"></div>
        </div>

        </div>

        <Outlet/>
   
    </section>
  )
}

export default Navbar