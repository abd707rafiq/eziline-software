import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
  return (
    <div className='work'>
      <h1 className='line'>________</h1>
      <h1 className='work-heading'>Let`s Work Together</h1>
      <h2 className='work-desc'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn</h2>
      <Link to="/contact"><button className='btn3'>Contact me</button></Link>
    </div>
  )
}

export default Work
