import React from 'react'
import Features from '../../component/Features/Features'
import Navbar from '../../component/Navbar/Navbar'
import List from '../../component/List/List'
import './Home.css'

const Home = () => {
    return (
        <div className="home-section">
          <Navbar/>
					<Features type="se"/>
					<List/>  
					<List/>           
        </div>
    )
}

export default Home
