import { useEffect, useState } from 'react';
import React from 'react'
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
       

     <div className="navbar">
        <span className="nav-logo">Banca</span>
        <div className={`nav-item ${isOpen && "open"}`}>
            <a href="features">Features</a>
            <a href="blogs">Blogs</a>
            <a href="faqs">FAQs</a>
            <a href="services">Services</a>
            <button className="btn">open an account</button>
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