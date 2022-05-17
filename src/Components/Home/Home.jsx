import React from 'react'
import {useState} from 'react'


// Component Imports

import SocialNav from '../Nav/SocialNav'
import TopNav from '../Nav/TopNav'
import Intro from '../../Intro/Intro'
import About from '../About/About'
import Experience from '../About/Experience'
import Skills from '../About/Skills'
import PortfolioNew from '../Portfolio/PortfolioNew'
import Contact from '../Contact/Contact'
import Testimonials from '../Testimonials/Testimonials'




function Home() {

const [color, setColor] = useState()

function colorChange() {

    window.addEventListener('scroll', (event) => {
        
    

        
  
      });


}


  return (
    <div>
        <TopNav/>
        <SocialNav/>
        <div className="content">
            <section id="intro">
                <Intro/>
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="experience">
                <Experience/>
            </section>
            <section id="services">
                <Skills/>
            </section>
            <section id="portfolio">
                <PortfolioNew/>
            </section>
            <section id="testimonials">
                <Testimonials/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    </div>
  )
}

export default Home