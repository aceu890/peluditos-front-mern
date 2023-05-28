import React from 'react'
import Hero from '../../components/Hero/Hero.js'
import Luxury from '../../components/luxury/Luxury.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Driver from '../../components/driver/Driver.jsx'
import Slider from '../../components/slider/Slider.jsx'
import '../../App.css';



function Home() {
  return (
    <div className='App'>
      <Hero/>
      <Slider />
      <Driver />
      <Luxury/>
      <Footer />
    </div>
  )
}

export default Home;