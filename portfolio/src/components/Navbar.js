import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav > 
        <h1 className='logo'>

          <Link to="/">JESSY</Link>
          
          
          
          </h1>
        <ul className='ul-li'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project-detail/:projectId">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/contact"><button className='btn1'>Contact me</button></Link>
        
      </nav>
    </div>



  )
}

export default Navbar
