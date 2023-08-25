import React from 'react'
import Image from '../Assets/pexels-3.jpeg'
import { Link } from 'react-router-dom'
import '../ForStyles/HomePage.css'
function HomePage() {
  return (
    <div className='home' style={{backgroundImage:(`url(${Image})`)}}>
        <div className='image-content' >
        <h1>Cynthia Practice Store </h1>
        <p>Pizza tastes Nice</p>

        <Link to='menu'>

        <button>ORDER NOW</button>
      
        </Link>
        
       </div>
    </div>
  )
}

export default HomePage
