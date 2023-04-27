import React from 'react'
import './header.css'
import Precise from '../../assests/resources/Cheers-removebg-preview.webp'
import PreciseM from '../../assests/resources/smph.png'
import { instagram, github, replit, discord, linked } from '../../containers/header/imports';
const Header = () => (
  <div className='pg__header1'id='Home'>
    <div className="pg__header " id="home">
      <div className="pg__header-content">
        <h1 className="gradient__text"> Hello there, <br />I am Sarthak From India</h1>
        <p>We gonna Welcome to Our new technical and educational era of human world. Discover blogs, articles and features soon enough welcome to our feed.</p>

      </div>
      <div className="pg__header-image">
        <img src={Precise} alt="PreiceGoals" width="26rem" height="auto"/>
      </div>
      <div className="pg__header-imageM">
        <img src={PreciseM} alt="PreiceGoals" />
      </div>
    </div>
    <div className='pg__brand '>
      <div><img src={instagram} alt="instagram" width="9rem" height="auto"/></div>
      <div><img src={github} alt="github" width="9rem" height="auto"/></div>
      <div><img src={replit} alt="replit" width="9rem" height="auto"/></div>
      <div><img src={discord} alt="discord" width="9rem" height="auto"/></div>
      <div><img src={linked} alt="linked" width="9rem" height="auto"/></div>
      {/* <div><img src={youtube} alt="youtube" /></div> */}
    </div>
  </div>
);

export default Header