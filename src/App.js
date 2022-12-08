import React from 'react'
import './App.css'
import About from './Components/About'
import ContactUs from './Components/contactUs'
import Footer from './Components/footer'
import Header from './Components/Header'
import Home from './Components/Home'
import HoemServices from './Components/HomeServices'
import Plan from './Components/pricingPlan'
import Progress from './Components/Progress'
import Services from './Components/Service'
import ManagingTeam from './Components/Team'
import Working from './Components/Working'

function App () {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <HoemServices/>
      <Services/>
      <Progress/>
      <Working/>
      <ManagingTeam/>
      <About/>
      <Plan/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
