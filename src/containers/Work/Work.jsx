import React from 'react'
import './work.css'
import { Link } from 'react-scroll'
import Chart from "../../../src/Components/chart/Chart.tsx"
// import frnt from '../../assests/resources/1.png'
// import gfx from '../../assests/resources/2.png'
// import disc from '../../assests/resources/3.png'

const Work = () => {
  return (
    <div className='Workspace setion__margin'>
      <div className='workord' id='Work'>
        <div className='mid-part'>
          <div className='worknav'>
            <ul>
              <li><a href='#fff'><p>Blogs</p></a></li>
              <li><Link to="Review" spy={true} smooth={true} offset={-150} duration={300} delay={0}><p>Reviews</p></Link></li>
              <li><Link to="Contact" spy={true} smooth={true} offset={-100} duration={300} delay={0}><p>Contact</p></Link></li>
            </ul>
          </div>
          <div className='workdef'>
            <div className='bar'></div>
            <div>
              <h1>Work Space</h1>
              <p>Hello, I am a dynamic and multi-talented individual with expertise in frontend development, UX/UI design, graphic design, and Discord server customization. I showcase my creative designs on my Instagram feed and have successfully managed best quality of work. Out of those, 94% of clients have been thoroughly impressed with my work Check out my work by clicking the buttons below !</p>
            </div>
          </div>
        </div>
        <div className='workfids'>
          <div className='buttons'>
            <button className='fidbtm1'><a href="#aas">Frontend</a></button>
            <button className='fidbtm2'><a href="#aas">Gfx Designer</a></button>
            <button className='fidbtm3'><a href="#aas">Discord Dev</a></button>
          </div>
          <div className='Charts'><Chart /></div>
        </div>
      </div>
    </div>
  )
}

export default Work