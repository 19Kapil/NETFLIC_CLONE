import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TittleCards from '../../components/TittleCards/TittleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className = 'Home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className ='banner-img' />
        <div className="hero_caption">
        <img src={hero_title} alt="" className ='caption-img' />
        <p> Discovering his ties to a secret ancient order, a young man living in modern Istanbu embarks on a quest to save a city from a immortal enemy</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt="" />Play</button>
          <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
        </div>
        <TittleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TittleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TittleCards title={" Only On Netflix "} category={"popular"}/>
      <TittleCards title={"Upcoming"} category={"upcoming"}/>
      <TittleCards title={"Top Pics for You"} category={"now_playing"}/>

      </div>
      <Footer/>
    </div>
  )
}

export default Home
