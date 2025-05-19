import React from 'react'
import Navbar from './components/Navbar'
import Lesson from './components/Lesson'
import Section from './components/Section'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Lesson/>
      <Section/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
      
    </div>
  )
}

export default App
