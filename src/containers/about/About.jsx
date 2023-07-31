import React, { useState } from 'react';
import './about.css';

import { Particle } from '../../Components';

import Feature from '../../Components/feature/Feature';

import education from '../../assets/resources/education.png'

import discord from '../../assets/discord.png';
import javascript from '../../assets/JavaScript-logo.png';
import nodejs from '../../assets/Nodejs.png';
import ps from '../../assets/Photoshop.png';
import python from '../../assets/Python-logo-notext.svg.png';
import html from '../../assets/HTML5.png';
import styles from '../../assets/css3.png';
import canva from '../../assets/canvas.png';
import reactnative from '../../assets/React-icon.svg.png';
import compiler from '../../assets/c++.png';

import handshake from '../../assets/resources/handshake.png'

const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="aboutpage" id='About'>
      <div className="w-full bottom-0 absolute top-0 left-0">
        <Particle />
      </div>
      <div className='overlay' >
        {/* Section: About Me */}

        {/* Section: Heading */}
        <div className="page-about-heading">
          <h1 className="Abouttitle">Encouraging the technical era <br /> <span>About Me</span></h1>
          <div className='horiembed'></div>
        </div>

        {/* Section: Tab Buttons */}
        <div className="tab-buttons">
          <button
            className={activeTab === 'education' ? 'active' : ''}
            onClick={() => handleTabClick('education')}
          >
            Education
          </button>
          <button
            className={activeTab === 'skills' ? 'active' : ''}
            onClick={() => handleTabClick('skills')}
          >
            Skills
          </button>
          <button
            className={activeTab === 'experience' ? 'active' : ''}
            onClick={() => handleTabClick('experience')}
          >
            Experience
          </button>
        </div>

        {/* Section: Tab Content */}
        <div className="page-about-container">
          {activeTab === 'education' && (
            <div className="education">
              <Feature
                text="I completed my secondary education in 2022 and am now preparing for JEE while also juggling my hobbies and passions for studies and programming. I am dedicated to both my academic pursuits and my personal interests, striving to excel in all areas of my life."
              />
              <img loading="lazy" width="250" height="165" src={education} alt="education" />
            </div>
          )}
          {activeTab === 'skills' && (
            <div className="skillcon">
              <Feature
                text="I am a skilled programmer with a keen interest in physics, and I have experience in both freelancing and managing Discord servers. Additionally, I have a talent for graphic design."
              />
              <div className="imgs" >
                <div className="siximg">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={javascript} alt="Javascript" /></div></a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={html} alt="HTML 5" /></div></a>
                  <a href="https://reactjs.org/"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={reactnative} alt="React Js" /></div></a>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={styles} alt="CSS" /></div></a>
                  <a href="https://www.python.org/"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={python} alt="Python" /></div></a>
                  <a href="https://nodejs.org/"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={nodejs} alt="Node Js" /></div></a>
                </div>
                <div className="fourimg">
                  <a href="https://discord.js.org/"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={discord} alt="Discord.js" /></div></a>
                  <a href="https://www.canva.com/"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={canva} alt="Canva" /></div></a>
                  <a href="https://www.cplusplus.com/"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={compiler} alt="C++" /></div></a>
                  <a href="https://www.adobe.com/products/photoshop.html"><div className="img"><img loading="lazy" width="4rem" height="4rem" src={ps} alt="PhotoShop" /></div></a>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'experience' && (
            <div className="exp"><Feature
              text="I have experience in moderating Discord servers, creating websites, and designing appealing graphics. Through my skills in communication, organization, and creativity, I have successfully provided value to clients in various areas."
            />
              <img loading="lazy" src={handshake} alt="handshake" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
