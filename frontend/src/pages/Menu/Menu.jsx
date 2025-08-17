import React, { useState } from 'react'
import './Menu.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'


const Menu = () => {

    const [catogery,setCatogery] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu catogery={catogery} setCatogery={setCatogery}/>
      <FoodDisplay catogery={catogery}/>
      <AppDownload/>
    </div>
  )
}

export default Menu
