import React from 'react'
import logo from '../../assets/images/Osumare Logo-01 (2) 4.svg'
import './Navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar"> 
    <div className="left"> 
        <img src={logo} alt="Logo" className="logo" /> 
      </div>
      <div className="right"> 
        <button className="buttoncontact">Contact Us</button> 
      </div>
      
    </nav>
  )
}

export default NavBar;
