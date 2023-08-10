import React from 'react'

import Navbar from '../components/Navbar'
import Home from "../components/Home"

import Skill from "../components/Skill"
import Project from "../components/Project"
import Testo from "../components/Testo"
import Work from '../components/Work'
import Footer from '../components/Footer'



const HomaPage = () => {
  return (
    <div>
           <Navbar/>
           <Home/>

        <Skill />
        
        <Project/>

        <Testo />
        <Work />
        <Footer />
    </div>
  )
}

export default HomaPage
