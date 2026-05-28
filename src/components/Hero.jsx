import React from 'react'
import img1 from "../assets/img1.jpg"
import elephant from "../assets/elephant.jpg"
const Hero = () => {
  return (
    
    <div className="hero">
      <a href="https://google.com" target='_main'><img src={img1} alt=""  width="300px"/></a>
      <a href="https://flipkart.com" target='_main'><img src={elephant} alt="" width="300px" /></a>
      <a href="https://www.amazon.in/" target='_main'><img src={img1} alt="" width="300px" /></a>
    </div>  
    
  )
}

export default Hero
