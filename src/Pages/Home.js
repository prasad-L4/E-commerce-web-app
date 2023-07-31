import React from 'react'

import Slide from '../Components/Slider/Slide'
import Product from '../Components/Products/Product'
import Category from '../Components/Categories/Category'

function Home() {
  return (
    <div>
        <Slide/>
        <Category/>
        <Product/>
        
    </div>
  )
}

export default Home