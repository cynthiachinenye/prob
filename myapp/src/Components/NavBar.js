import React, {useState}from 'react'
import ForLogo from '../Assets/pizza-logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import '../ForStyles/Navbar.css'

function Home() {
    const [openLink] = useState(false)

  return (
    <div className='navbar'>
    <div className="left-side" id={openLink?'open':"close"}>
     <img src={ForLogo}/>
    </div>
    <div className="right-side">
      <Link to='/'>Home</Link>
      <Link to="menu">Menu</Link>
      <Link to='about'>About Us</Link>
      <Link to='contact'>Contact</Link>
    </div>
    
      
    </div>
  )
}

export default Home
