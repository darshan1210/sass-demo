import React from 'react'
import './App.css'
import About from './Components/About'
import Header from './Components/Header'
import Home from './Components/Home'
import HoemServices from './Components/HomeServices'
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
    </div>
  )
}

export default App
