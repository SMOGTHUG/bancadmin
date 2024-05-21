import React, { useState, useEffect } from "react";
import './home.css';
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Details from "../components/details/Details";
import Action from "../components/calltoaction/Action";
import Customer from "../components/knowyourcustomer/Customer";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Faq from "../components/faq/Faq";
import Start from "../components/getstarted/Start"
import Blog from "../components/blog/Blog";
import Mail from "../components/mail/Mail";
import Footer from "../components/footer/Footer";


  


export default function Home() {

    return (
       <div>
    
        <Navbar />
            <Hero />

           <Details />

            <Action />

            <Customer />

            <About />

            <Banner />

            <Faq />

            <Start />

            <Blog />

            <Mail />

            <Footer />



        
      </div>
       

        
        

        
        
        
    );
}