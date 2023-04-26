import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord, FaCubes, FaInstagram, FaSpotify, FaPaperPlane } from 'react-icons/fa';
import {Link} from 'react-scroll'
const Footer = () => {
  return (
    <div className='Footeract'>
      <hr />
      <div className='Overley'  id='Contact'>
        <div className='row1'>
          <div className='coleft'>
            <h1 >Precise <span> Goals </span></h1>
            <p>The Portfolio of freelancer, Webdeveloper, Graphics designer, Ui Ux Designer, etc </p>
          </div>
          <div className='colright'>
            <div className='Homeline'>
              <h4><p><a href="top">Home</a></p></h4>
            </div>
            <div className='Aline' >
            <h4><p><a href="Work">About</a></p></h4>
              <li>
                <h5><p><Link to='About'>Education</Link></p></h5>
                <h5><p><Link to='About'>Skills</Link></p></h5>
                <h5><p><Link to='About'>Experience</Link></p></h5>
                <h5><p><Link to='fff'>Timeline</Link></p></h5>

              </li>
            </div>
            <div className='portline'>
              <h4><p><a href="Work">Portfolio</a></p></h4>
              <li>
                <h5><p><Link to='fff'>Frontend </Link></p></h5>
                <h5><p><Link to='fff'>Graphics Design</Link></p></h5>
                <h5><p><Link to='fff'>Discord dev</Link></p></h5>
              </li>
            </div>
            <div className='reline'>
              <h4><p><Link to='Review'>Reviews</Link></p></h4>
              <li>
                <h5><p><Link to='fff'>All reviews</Link></p></h5>
              </li>
            </div>
            <div className='blogline'>
              <h4><p><Link to='fff'>Blogs</Link></p></h4>
              <li>
                <h5><p><Link to='fff'>Blog page</Link></p></h5>
              </li>
            </div>
          </div>
        </div>
        <div className='row2'>
          <div className='btmm'>
            <button  type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScpBHpTE__JlvC-cK2gRjS5ZIMIZryHYbtLY27UmNAMBpVGIw/viewform" rel="noreferrer">Contact</a></button>
            <button  type="button"><a href="https://drive.google.com/file/d/1couPYcVrc57htp0vURpnQG4Xa2x5S21L/view?usp=share_link"  rel="noreferrer">Download my Cv</a></button>
          </div>
        </div>
          <div className='email'><p><FaPaperPlane className='enve'/>elitesarthakamr@gmail.com</p></div>
        <div className='row3'>
          <div className="botleft"><p>© 2022-23  Sarthak Patil  - All rights reserved.</p></div>
          <div className="botright">
            <div className="socialicons">
              <a target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UC3WNgoJ9XxHWAQT_98xUC7A"><FaYoutube className="yt" /></a>
              <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/sarthak-tulsidas-patil-11914b24a/"><FaLinkedin className="in" /></a>
              <a target="_blank" rel='noreferrer' href="https://discord.gg/MrZVXNkYwW"><FaDiscord className="dc" /></a>
              <a target="_blank" rel='noreferrer' href="https://www.instagram.com/precise_goals/"><FaInstagram className="insta" /></a>
              <a target="_blank" rel='noreferrer' href="https://github.com/Precise-Goals"><FaGithub className="git" /></a>
              <a target="_blank" rel='noreferrer' href="https://open.spotify.com/user/31s4ssb5ucxgvzm6qonffom5aagm?si=b9a3cd369717458b"><FaSpotify className="spoty" /></a>
              <a target="_blank" rel='noreferrer' href="https://replit.com/@SarthakTulsidas"><FaCubes className="repl" /></a>             
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Footer