import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Restaurant from '../Restaurant/Restaurant'
import './ExploreRestaurant.css'

const ExploreRestaurant = ({category}) => {
    const {restaurant_list}=useContext(StoreContext)

  return (
    <div className='res-display' id='res-display'>
      <h1>ALL RESTAURANTS</h1>
      <div className='res-display-list'>
        {restaurant_list.map((item,index)=>{
          return <Restaurant key={index} id={item.id} name={item.name} fee ={item.fee} time={item.time} image={item.image}/>
        })}
      </div>

    </div>
  )
}

export default ExploreRestaurant
