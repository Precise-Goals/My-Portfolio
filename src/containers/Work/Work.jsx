import React from 'react'
import './work.css'
import { Link } from 'react-scroll'
import Chart from '../../Components/chart/charts'
// import frnt from '../../assests/resources/1.png'
// import gfx from '../../assests/resources/2.png'
// import disc from '../../assests/resources/3.png'

const Work = () => {
  return (
    <div className='Workspace'>
      <div className='workord' id='Work'>
        <div className='mid-part'>
          <div className='worknav'>
            <ul>
              <li><a href='#fff'><p>Blogs</p></a></li>
              <li><Link to="Review" spy={true} smooth={true} offset={0} duration={300} delay={0}><p>Reviews</p></Link></li>
              <li><Link to="Contact" spy={true} smooth={true} offset={-100} duration={300} delay={0}><p>Contact</p></Link></li>
            </ul>
          </div>
          <div className='workdef'>
            <div className='bar'></div>
            <h1>My Portfolio</h1>
            <div className="circle"> </div>
            <p>Hello, I am a dynamic and multi-talented individual with expertise in Programming and AIML development, UX/UI design, graphic design, and Discord server customization. I showcase my creative designs on my Instagram feed and have successfully managed best quality of work. Out of those, 94% of clients have been thoroughly impressed with my work Check out my work by clicking the buttons below !</p>
          </div>
        </div>
        <div className='workfids'>
          <div className='buttons'>
            <button className='fidbtm1'><a href="https://github.com/Precise-Goals">Programming</a></button>
            <button className='fidbtm2'><a href="https://precisegallery.pages.dev">Gfx Designer</a></button>
            <button className='fidbtm3'><a href="https://precisediscord.pages.dev">Discord Dev</a></button>
          </div>
          <div className='Charts'><Chart /></div>
        </div>
      </div>
    </div>
  )
}

export default Work