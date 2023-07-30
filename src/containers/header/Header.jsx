import React from 'react';
import './header.css'; // Original CSS file for global styles
import instagram from '../../assets/resources/brand1.webp';
import github from '../../assets/resources/brand2.webp';
import replit from '../../assets/resources/brand3.webp';
import discord from '../../assets/resources/brand4.webp';
import linked from '../../assets/resources/brand5.webp';

const Header = () => (
  <>
    <div id="Home">
      <div className="Contenthome">
        <div className="written">
          <h1>
            Hey there, <br /> <span>I am <span>Sarthak</span> from India</span>
          </h1>
          <p>I believe in patience, skills, discipline, and perseverance.</p>
        </div>
        <div className="imagecontent">
          <div><img loading="lazy" src={instagram} alt="Instagram Logo" width="125" height="25" /></div>
          <div><img loading="lazy" src={github} alt="GitHub Logo" width="125" height="25" /></div>
          <div><img loading="lazy" src={replit} alt="Replit Logo" width="125" height="25" /></div>
          <div><img loading="lazy" src={discord} alt="Discord Logo" width="125" height="25" /></div>
          <div><img loading="lazy" src={linked} alt="LinkedIn Logo" width="125" height="25" /></div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
