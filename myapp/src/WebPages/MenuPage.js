import React from 'react'
import {Menu} from '../Helper/MenuPageList'
import MenuItem from '../Components/MenuItem'
import '../ForStyles/Menu.css'

function MenuPage() {
  return (
    <div className='menu'>
    <h1 className='menu-title'>Our Menu</h1>
    <div className="container">
     {
        Menu.map((menu,key) => {
            
            return (
                <MenuItem
                 key ={key}
                 image={menu.image}
                 name={menu.name}
                 price={menu.price} 
                
                />
            )
        })
     }
     
    </div>
      
    </div>
  )
}

export default MenuPage
