import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assests/resources/smphbg-removebg-preview.png'

const Menu = () => {
  <>
    <p><Link to="top" spy={true} smooth={true} offset={-100} duration={300} delay={0}>Home</Link></p>
    <p><Link to="About" spy={true} smooth={true} offset={-100} duration={300} delay={0}>About</Link></p>
    <p><Link to="Work" spy={true} smooth={true} offset={-25} duration={300} delay={0}>Work</Link></p>
    <p><Link to="Review" spy={true} smooth={true} offset={-150} duration={300} delay={0}>Reviews</Link></p>
    <p><Link to="Contact" spy={true} smooth={true} offset={-100} duration={300} delay={0}>Contact</Link></p>
  </>
}
const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='pg__navbar' id='top'>
      <div className='pg__navbar-links'>
        <div className='pg__navbar-links_logo'>
          
          <Link to="top" spy={true} smooth={true} offset={-100} duration={300} delay >
            <img src={logo} alt="logo" />
            </Link>
        </div>
        <div className='pg__navbar-links_container'>
          <p><Link to="top" spy={true} smooth={true} offset={-100} duration={300} delay={0}>Home</Link></p>
          <p><Link to="About" spy={true} smooth={true} offset={-100} duration={300} delay={0}>About</Link></p>
          <p><Link to="Work" spy={true} smooth={true} offset={-25} duration={300} delay={0}>Work</Link></p>
          <p><Link to="Review" spy={true} smooth={true} offset={-150} duration={300} delay={0}>Reviews</Link></p>
          <p><Link to="Contact" spy={true} smooth={true} offset={-100} duration={300} delay={0}>Contact</Link></p>
          < Menu />
        </div>
      </div>
      <div className="pg__navbar-sign">
        <p>Sign in</p>
        <button type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScpBHpTE__JlvC-cK2gRjS5ZIMIZryHYbtLY27UmNAMBpVGIw/viewform" target="_blank" rel="noreferrer">Contact</a></button>
      </div>
      <div className="pg__navbar-menu">
        {ToggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {ToggleMenu && (
          <div className="pg__navbar-menu_container scale-up-center">
            <div className="pg__navbar-menu_container-links">
              <p><Link to="top" spy={true} smooth={true} offset={-100} duration={300} delay={0}>Home</Link></p>
              <p><Link to="About" spy={true} smooth={true} offset={-100} duration={300} delay={0}>About</Link></p>
              <p><Link to="Work" spy={true} smooth={true} offset={-25} duration={300} delay={0}>Work</Link></p>
              <p><Link to="Review" spy={true} smooth={true} offset={-150} duration={300} delay={0}>Reviews</Link></p>
              <p><Link to="Contact" spy={true} smooth={true} offset={-100} duration={300} delay={0}>Contact</Link></p>
              <div className="pg__navbar-menu_container-links-sign">
                <p><a href="#top">Sign in</a></p>
                <button type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScpBHpTE__JlvC-cK2gRjS5ZIMIZryHYbtLY27UmNAMBpVGIw/viewform" target="_blank" rel="noreferrer">Contact</a></button>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  )
}


export default Navbar