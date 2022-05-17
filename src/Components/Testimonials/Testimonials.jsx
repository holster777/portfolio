import React from 'react'
import { useState } from 'react'
import TestimonialControls from './TestimonialControls'


const testimonialData = [
{
    name: "Kate Baker - Gold Dust Design Co",
    quote: "Hollie has been my favourite designer for a long time...",
    text: "My brand and website were not representing my business properly at all, I was honestly a bit embarrassed to show it to people but it was so far down my to do list. Hollie has been my favourite designer for a long time and I knew that she would go above and beyond and deliver something that would blow me away. I am beyond proud of the brand and website that she created. The process was great, and she was such fun to work with. I can't recommend her enough.",
    img: "https://drive.google.com/uc?export=view&id=1Up0Lmz6biWfYDfWRTSDDmzsmciFPiYtp",
},
{
    name: "Alex Dickinson - Negotiation Coach & Psychotherapist",
    quote: "Hollie helped me design a brand that truly feels like me...",
    text: "One of Hollie's previous clients recommended her to me and I could not be more thrilled that she did. Hollie helped me design a brand that truly feels like me and has room to expand in the ways that I envision for my future. She was amazing to work with, so creative, so thorough, and absolutely willing to roll up her sleeves and figure out solutions to any problems that came up. She was great at working with my feedback and surprising me with something better than I could have envisioned. And she helped me move an absolute mountain of content over to the new site and make it look great. Highly highly recommend her for any website project you have!",
    img: "https://drive.google.com/uc?export=view&id=1qKEeHI3uXyU1kZMsce7PGHUF_q7nb5w8",
},
{
    name: "Lauren Tilden - Station 7 and Good Sheila",
    quote: "I feel really confident in the image my business now presents...",
    text: "Before I hired Hollie, I was spending a lot of time doing very mediocre DIY graphic design for myself. It took me way too long, never turned out like I had in mind, and ultimately was doing a great disservice to my business. Now I feel like every piece of design that Hollie works on finally represents the quality, style, and unique personality of my brand. It's like what was in my head was translated into reality in a way that I never would have been able to do or even articulate myself. I feel really confident in the image that my business now presents to the world, and so grateful to Hollie for her creative genius. To another business owner thinking about hiring her, I would tell them to RUN, not WALK. Your brand is about to level up in a big way. Communicating with Hollie throughout the design process is easy and effortless. There is a clear, organized plan, and I always know where we're at.",
    img: "https://drive.google.com/uc?export=view&id=12HtHtaVbcukpjPYgBvQBcdmnYNHKBmff",
},

]


function Testimonials() {

    const [currentSlide, setCurrentSlide] = useState(0)



  return (
    <div className="container">
        <div className="carousel">
                {testimonialData.map((client, index) => (
                <div className="carousel-item" key={index}>
                    <div className="top-row">
                        <img className="testimonial-img" src={client.img}/>
                        <h1>{client.quote}</h1>
                    </div>
                    <div>
                        <p>{client.text}</p>
                        <h3>{client.name}</h3>
                    </div>
                </div>
                ))}
        </div>
        <TestimonialControls/>
    </div>
  )
}

export default Testimonials