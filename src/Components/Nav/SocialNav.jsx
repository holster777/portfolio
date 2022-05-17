import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function SocialNav() {
  return (
    <div className="social-nav">
      <div className="line"></div>
        <div className="social-icons">
            <a className='icon' href="https://www.instagram.com/hd.creativestudio"><AiFillInstagram/></a>
            <a className='icon' href="https://www.linkedin.com/hollie-duncan"><AiFillLinkedin/></a>
            <a className='icon' href="https://github.com/holster777"><AiFillGithub/></a>
        </div>
    </div>
  )
}

export default SocialNav