// Dependent imports

import React from 'react'
import {useState, useEffect} from 'react'
import logoBlack from '../../Images/HD-Creative-Studio-Logo-Black.png'
import logoWhite from '../../Images/Rebrand-2022.png'





// Main Function

function TopNav() {

  // const {navColor, setNavColor} = useState(dark)
  // const {navbarLogo, setNavbarLogo} = useState(logoBlack)

  // const changeBackground = () => {
  //   if (window.location.pathname) {
  
  //     setNavColor(dark)
  //   } else {
  //     setNavColor(light)
  //   }
  // }

  // useEffect(() => {
  //   changeBackground()
  //   window.addEventListener("scroll", changeBackground)
  // })

  
  // const changeLogo = () => {
  //   if (window.scrollY >= 60) {
  //     setNavbarLogo(logoWhite)
  //   } else {
  //     setNavbarLogo(logoBlack)
  //   }
  // }

  // useEffect(() => {
  //   changeLogo()
  //   window.addEventListener("scroll", changeLogo)
  // })


  return (
    <div className="navbar">
        <img className="logo" src={logoBlack} alt="HD Creative Studio Logo"/>
        <div> 
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <button className="green-button" href="#contact">Get in Touch</button>
        </div>
    </div>
  )
}

export default TopNav