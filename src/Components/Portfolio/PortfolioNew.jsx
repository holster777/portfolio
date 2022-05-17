import React, { useState } from "react"
import data from "./PortfolioData"



const Portfolio = () => {
  const [item, setItem] = useState(data)

  const filterItem = (cateItem) => {
    const updatedItme = data.filter((curElem) => {
      return curElem.category === cateItem
    })
    setItem(updatedItme)
  }
  return (
    <div className="container">
      <section className='portfolio'>
        <div className='container2'>
          <div className='head flexSB'>
            <div className='left'>
              <h1>Recent Work</h1>
            </div>
            <div className='links'>
              <ul className='flexSB'>
                <li className='active' onClick={() => setItem(data)}>
                  All
                </li>
                <li onClick={() => filterItem("Web Design")}>Web Design </li>
                <li onClick={() => filterItem("Branding")}>Branding</li>
                <li onClick={() => filterItem("Development")}>Development</li>
              </ul>
            </div>
            <h1 className="arrow">→</h1>
          </div>

          <div className='grid grid-overflow'>
            {item.map((elem) => {
              const { cover, title, category } = elem

              return (
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <div className='overlay'>
                    <div className="text">
                        <h1>{title}</h1>
                        <p>{category}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio