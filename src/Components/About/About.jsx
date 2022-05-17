import React from 'react'
import Hollie from '../../Images/Hollie-Black-and-White.png'

function About() {
  return (
    <div className="container">
            <div className='row'>
                <img className="hollie" src={Hollie} alt="Hollie Duncan Front End Developer" />

                <div className="about-text">
                    <h3>A little bit...</h3>
                    <h1>About Me</h1>
                    <p>I'm a typical Brit who loves a good cup of tea and a biscuit to dunk. I have had the pleasure of working remotely since 2019 and have enjoyed living in both Bali and Lisbon, where it’s a little sunnier than back home! I love clean, minimal, and slightly edgy design, with pops of colour! I also have a bit of an addiction to cool monospace fonts and tropical pastels.</p>
                </div>
            </div>
        </div>
  )
}

export default About