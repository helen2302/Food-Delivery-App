import React from 'react'
import './Category.css'
const Category = () => {
  return (
    <div class="cat-card">
      <div className="category-title">Category</div>
        <div className="category-content">
          <form>
            <label className='box'>
              <div className='category'>
                <input type="radio" name="test" id='one'/> 
                <span className="checkmark">Cafe</span> 
              </div>
            </label>
        
            <label className='box'>
              <div className='category'>
                <input type="radio" name="test" id='two'/> 
                <span className="checkmark">Asian Restaurant</span> 
              </div>
            </label>

            <label className='box'>
              <div className='category'>
                <input type="radio" name="test" id='three'/> 
                <span className="checkmark">Fish And Chips</span> 
              </div>
            </label> 

            <label className='box'>
              <div className='category'>
                <input type="radio" name="test" id='four'/> 
                <span className="checkmark">All</span> 
              </div>
            </label> 
          </form>
        </div>
    </div>
  )
}

export default Category
