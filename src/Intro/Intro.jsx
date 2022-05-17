import React from 'react'

import signature from '../Images/HD-Signature.png'

function Intro() {
  return (
    <div className="container mg-top">
        <h3>Well Hello There...</h3>
        <h1>I'm Hollie Duncan, a creative front end developer. Welcome to my studio website :)</h1>
        <p>I am a multi passionate creative and offer services in brand design, web design, graphic design and web development. I like to work with nice people on projects that are doing a bit of good for the world.  So feel free to check out my website to learn a bit more about me and see some of my previous work. </p>
        <div className="signature-flex">
            <img className="signature" src={signature} alt="Hollie Duncan Signature" />
        </div>
    </div>
  )
}

export default Intro