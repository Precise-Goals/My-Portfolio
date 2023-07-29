import React from 'react' ;
import './brand.css' ;
import instagram from '../../assests/resources/brand1.webp'
import github from '../../assests/resources/brand2.webp'
import replit from '../../assests/resources/brand3.webp'
import discord from '../../assests/resources/brand4.webp'
import linked from '../../assests/resources/brand5.webp'
// import youtube from '../../assests/resources/brand6.webp'
const Brand = () => {
  return (
    <div className='pg__brand section__padding'>
      <div><img src={instagram} alt="instagram" /></div>
      <div><img src={github} alt="github" /></div>
      <div><img src={replit} alt="replit" /></div>
      <div><img src={discord} alt="discord" /></div>
      <div><img src={linked} alt="linked" /></div>
      {/* <div><img src={youtube} alt="youtube" /></div> */}
    </div>
  )
}

export default Brand