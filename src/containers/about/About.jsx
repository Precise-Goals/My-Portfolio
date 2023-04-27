import React from 'react';
import Feature from '../../Components/feature/Feature.jsx';
import './about.css';
// import Chert from "../../Components/chart/Chart.tsx"
// import Photu from '../../assests/resources/jkboi.png'

const About = () => (

  <div className="pg__about stion__margin" >
    <div className='overlay'>
      <div className="About" id='About'>
        <div class="pag__features-container__feature-title"><div></div></div>
        <h1>About Me</h1>
      </div>
      <div className="pg__about-heading">
        <h1 className="gradient__text">Encouraging the World of technology</h1>
        

      </div>
      <div className="pg__about-container">
        <Feature title="Education" text="I completed my secondary education in 2022 and am now preparing for JEE while also juggling my hobbies and passions for studies and programming. I am dedicated to both my academic pursuits and my personal interests, striving to excel in all areas of my life." />
        <Feature title="Skills" text="I am a skilled programmer with a keen interest in physics, and I have experience in both freelancing and managing Discord servers. Additionally, I have a talent for graphic design." />
        <Feature title="Experience" text="I have experience in moderating Discord servers, creating websites, and designing appealing graphics. Through my skills in communication, organization, and creativity, I have successfully provided value to clients in various areas." />
      </div>
    </div>
  </div>
);


export default About;