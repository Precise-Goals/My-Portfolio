import React from 'react'
import './header.css'
import Precise from '../../assests/resources/Cheers-removebg-preview.webp'
import PreciseM from '../../assests/resources/smph.webp'
import instagram from '../../assests/resources/brand1.webp'
import github from '../../assests/resources/brand2.webp'
import replit from '../../assests/resources/brand3.webp'
import discord from '../../assests/resources/brand4.webp'
import linked from '../../assests/resources/brand5.webp'
// import youtube from '../../assests/resources/brand6.webp'
const Header = () => (
  <div className='pg__header1'id='Home'>
    <div className="pg__header " id="home">
      <div className="pg__header-content">
        <h1 className="gradient__text"> Hello there, <br />I am Sarthak From India</h1>
        <p>We gonna Welcome to Our new technical and educational era of human world. Discover blogs, articles and features soon enough welcome to our feed.</p>

      </div>
      <div className="pg__header-image">
        <img src={Precise} alt="PreiceGoals" width="450px" height="450px"/>
      </div>
      <div className="pg__header-imageM">
        <img src={PreciseM} alt="PreiceGoals" />
      </div>
    </div>
    <div className='pg__brand '>
      <div><img src={instagram} alt="instagram" width="125px" height="25px"/></div>
      <div><img src={github} alt="github" width="125px" height="25px"/></div>
      <div><img src={replit} alt="replit" width="125px" height="25px"/></div>
      <div><img src={discord} alt="discord" width="125px" height="25px"/></div>
      <div><img src={linked} alt="linked" width="125px" height="25px"/></div>
      {/* <div><img src={youtube} alt="youtube" /></div> */}
    </div>
  </div>
);

export default Header