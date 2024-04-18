import React from 'react'
import { useState } from 'react'
import ExploreRestaurant from '../../components/ExploreRestaurant/ExploreRestaurant'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
const Home = () => {
    const [category,setCategory]= useState("All");
  return (
    <div>
      <Sidebar/>
      <Navbar/>
      <ExploreRestaurant category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
