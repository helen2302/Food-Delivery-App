import React from 'react'
import './Restaurant.css'
import { assets } from '../../assets/assets'
import { AiFillClockCircle } from "react-icons/ai";
const Restaurant = ({id,name,time,fee,image}) => {
  return (
    <div className='restaurant'>
      <div className='restaurant-img-container'>
        <img className='restaurant-image' src={image} alt=""/>
      </div>
      <div className='restaurant-info'>
        <div className='restaurant-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt=""/>
        </div>
        <p className="restaurant-desc">${fee} Delivery Fee</p>
        <p className="restau-price"><AiFillClockCircle className='time' /> {time} min</p>
      </div>
    </div>
  )
}

export default Restaurant
