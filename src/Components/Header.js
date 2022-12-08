import React, { useState } from 'react'
import Logo from '../asets/img/logo.png'
import '../Styles/header.scss'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'

function Header () {
  const [menu, setMenu] = useState(false)

  function flag () {
    setMenu(!menu)
  }
  return (
        <div className='header'>
            <div className='header_logo_background'>
            <img className='header_logo_background_logo' src={Logo} alt="" />
            </div>

            <div className='nav'>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">About</a>
                <a href="#">Page</a>
                <a href="#">Blocks</a>
                <a href="#">Contact</a>
                <button className='nav_btn'>buy now</button>
            </div>
           {(menu) && (
           <div className='menu_nav'>
                <div className='menu_nav_close' onClick={() => flag()}>
                  <RxCross2/>
                </div>
              <img src={Logo} alt="" />
              <div className='menu_nav_link'>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">About</a>
                <a href="#">Page</a>
                <a href="#">Blocks</a>
                <a href="#">Contact</a>
                <button className='btn'>buy now</button>
                </div>
            </div>
           ) }
            <div className='menu' onClick={() => flag()}>
              <FiMenu/>
            </div>
        </div>
  )
}

export default Header
