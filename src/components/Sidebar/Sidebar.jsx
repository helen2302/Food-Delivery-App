import React from 'react'
import './Sidebar.css';
import Category from './Category/Category';
import Price from './Delivery/Delivery';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <>
      <section className='sidebar'>
        <div className='logo-container'>
          <img src={assets.logo} alt="" className="logo-sidebar"/>
          <h1 className='sidebar-tag'>Logo</h1>
        </div>
        <Category/>
        <Price/>
      </section>
    </>
  )
}

export default Sidebar
