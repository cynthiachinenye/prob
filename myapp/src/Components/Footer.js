import React from 'react'
import Insta from  '@mui/icons-material/Instagram'
import FaceBook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import LinkedIn from '@mui/icons-material/LinkedIn'
import '../ForStyles/Footer.css'


function Footer() {
  return (
    <div className="footer">
      
      <div className="socialMedia">
       <Insta/>
       <FaceBook/>
       <Twitter/>
       <LinkedIn/>
      </div>
      <p>&copy; 2023 cyndymengpractice.com</p>      
    </div>
  )
}

export default Footer
