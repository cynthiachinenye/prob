import React from 'react'
import {MenuList} from '../Helper/MenuPageList'
import MenuItem from '../Components/MenuItem'

function MenuPage() {
  return (
    <div className='menu'>
    <h1 className='menu-title'>Our Menu</h1>
    <div className="container">
     {
        MenuList.map((menu,key) => {
            
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
