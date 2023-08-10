import React from 'react'
import img1 from "../images/hero-img.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <div class='container'>
  <div class='text-container'>
    <h3 class='heading'>__Introducing</h3>
    <h1>Hello<br/> I'm Jessy<br/>Walter</h1>
    <p>Since beginning my journey as a freelance designer nearby 7 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products.</p>
    <Link to="/contact"><button className='btn2'>Contact me</button></Link>
  </div>
  <div class='lamp-container'>
    <img src={img1} class='lamp' alt='lamp'/>
  </div>
</div>

    
    </div>
  )
}

export default Home
