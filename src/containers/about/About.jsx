import React, { useState } from 'react';
import './about.css';
import Feature from '../../Components/feature/Feature';

import discord from '../../assets/discord.png'
import javascript from '../../assets/JavaScript-logo.png'
import nodejs from '../../assets/Nodejs.png'
import ps from '../../assets/Photoshop.png'
import python from '../../assets/Python-logo-notext.svg.png'
import html from '../../assets/HTML5.png'
import styles from '../../assets/discord.png'
import canva from '../../assets/canvas.png'
import reactnative from '../../assets/React-icon.svg.png'
import compiler from '../../assets/c++.png'


const About = () => {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="aboutpage">
      <div className='overlay'>
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
            <Feature
              text="I completed my secondary education in 2022 and am now preparing for JEE while also juggling my hobbies and passions for studies and programming. I am dedicated to both my academic pursuits and my personal interests, striving to excel in all areas of my life."
            />
          )}
          {activeTab === 'skills' && (
            <div className="skillcon">
              <Feature
                text="I am a skilled programmer with a keen interest in physics, and I have experience in both freelancing and managing Discord servers. Additionally, I have a talent for graphic design."
              />
              <div className="skillsimg" >
                <div className="6img">
                  <div className="img"><img width src={javascript} alt="Javascript" /></div>
                  <div className="img"><img width src={html} alt="HTML 5"/></div>
                  <div className="img"><img width src={reactnative} alt="React Js"/></div>
                  <div className="img"><img width src={styles} alt="CSS" /></div>
                  <div className="img"><img width src={python} alt="Python" /></div>
                  <div className="img"><img width src={nodejs} alt="Node Js" /></div>
                </div>

                {/*     WIDTH 10% give here ________________________ */}



                <div className="4img">
                  <div className="img"><img width src={discord} alt="Discord.js"/></div>
                  <div className="img"><img width src={canva} alt="Canva" /></div>
                  <div className="img"><img width src={compiler} alt="C++" /></div>
                  <div className="img"><img width src={ps} alt="PhotoShop" /></div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'experience' && (
            <Feature
              text="I have experience in moderating Discord servers, creating websites, and designing appealing graphics. Through my skills in communication, organization, and creativity, I have successfully provided value to clients in various areas."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
