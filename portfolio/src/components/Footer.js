import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import { BiHash } from 'react-icons/bi'
import { Link } from 'react-router-dom'
 
const Footer = () => {
  return (
    <div className='footer'>
      <h1 className='foot-logo'>
        <Link to="/">JESSY</Link>

        </h1>
      <h3 className='footer-text'>© 2023 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</h3>
      <div className="footer-icons">
        
      </div>
      <ul className='footer-icons'>
      <Link to="https://www.instagram.com/"><li className='single-icon'><AiOutlineInstagram/></li></Link>
        <Link to="www.linkedin.com/in/abdullah-rafiq-a56974213"><li className='single-icon'><BiLogoLinkedin/></li></Link>
        <Link to="https://github.com/abd707rafiq"><li className='single-icon'><AiOutlineGithub/></li></Link>
       
       <Link to="https://hashnode.com/"> <li className='single-icon'><BiHash/></li></Link>

      </ul>
    </div>
  )
}

export default Footer
