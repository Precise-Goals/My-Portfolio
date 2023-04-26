import React from 'react' ;
import './brand.css' ;
import { instagram, github, replit, discord, linked } from '../../containers/header/imports';
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