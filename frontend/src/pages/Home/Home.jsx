import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Home = () => {

    const [catogery,setCatogery] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu catogery={catogery} setCatogery={setCatogery}/>
    </div>
  )
}

export default Home
