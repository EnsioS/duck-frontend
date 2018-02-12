import React from 'react'
import Navbar from 'react-bootstrap'
import logo from './VincitDuck.png'
import './Header.css'

const Header = () => {
  return (  
    <Navbar inverse className='nav'>
    <img src={logo} alt='Logo' className='logo' height="56" width="68"/>
    <Navbar.Header>        
      <Navbar.Text>      
        <span className='nav-header'>Duck sightings</span>
      </Navbar.Text> 
    </Navbar.Header>
  </Navbar>
  )     
}

export default Header