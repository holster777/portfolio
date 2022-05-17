import React from 'react'
import logo from '../../Images/HD-Creative-Studio-Logo-Black.png'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function MobileNav() {
  return (
    <div>
        <img src={logo} alt="HD Creative Studio Logo"/>
        <div>=</div>
        <div>
            <a href="">About</a>
            <a href="">Portfolio</a>
            <a className="green-button" href="">Get in Touch</a>
        </div>
        <div className="black-line"></div>
        <div className="social-icons">
            <a href="https://www.instagram.com/hd.creativestudio"><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/hollie-duncan"><AiFillLinkedin/></a>
            <a href="https://github.com/holster777"><AiFillGithub/></a>
        </div>
    </div>
  )
}

export default MobileNav