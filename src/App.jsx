import React from 'react'
import './index.css'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'


const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </div>
  )
};

export default App;