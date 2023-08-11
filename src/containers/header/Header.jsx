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
          <div><a href="https://www.instagram.com/precise_goals/"><img loading="lazy" src={instagram} alt="Instagram Logo" width="125" height="25" /></a></div>
          <div><a href="https://github.com/Precise-Goals"><img loading="lazy" src={github} alt="GitHub Logo" width="125" height="25" /></a></div>
          <div><a href="https://replit.com/@SarthakTulsidas"><img loading="lazy" src={replit} alt="Replit Logo" width="125" height="25" /></a></div>
          <div><a href="https://discord.gg/9pCnsJqXQ9"><img loading="lazy" src={discord} alt="Discord Logo" width="125" height="25" /></a></div>
          <div><a href="https://www.linkedin.com/in/sarthak-tulsidas-patil-11914b24a/"><img loading="lazy" src={linked} alt="LinkedIn Logo" width="125" height="25" /></a></div>
        </div>
      </div>
    </div>
  </>
);

export default Header;
