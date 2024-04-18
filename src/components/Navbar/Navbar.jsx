import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { IoSearchOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo"/>
      <div class='location-box'>
        <MdLocationOn class='location-icon'/>
        <input type='text' placeholder='Location' className="location" id="location"/>
      </div>
      <div className='search-box'>
        <IoSearchOutline className='search-icon'/>
        <input type="text" placeholder='Search' className="search" id="search"/> 
      </div>
      
      <div className='navbar-right'>
        <FaUser className='user-icon'/>
        <div className='shopping'>
          <FaCartShopping className='shopping-icon'/>
          <div className='dot'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
