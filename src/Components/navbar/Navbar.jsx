import React, { useState } from 'react';
import {RiCloseLine, RiMenu3Line } from "react-icons/ri";
import {Link} from 'react-scroll';
import './navbar.css';
import logo from '../../assests/resources/smphbg-removebg-preview.png'

const Menu =() => {
     <>
        <p><Link to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="About" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Work" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Footer" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Review" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        </>
}
const Navbar = () => {
  const [ ToggleMenu , setToggleMenu] = useState(false);
   
  return (
    <div className='pg__navbar' id='#top'>
      <div className='pg__navbar-links'>
        <div className='pg__navbar-links_logo'>
          {/* <h1><span>S</span>arthak.</h1> */}
          <img src={logo} alt="logo" />
        </div>
        <div className='pg__navbar-links_container'>
        <p><Link to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="About" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Work" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Footer" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Review" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
          < Menu />
        </div>
      </div>
      <div className="pg__navbar-sign">
            <p>Sign in</p>
            <button  type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScpBHpTE__JlvC-cK2gRjS5ZIMIZryHYbtLY27UmNAMBpVGIw/viewform" target="_blank" rel="noreferrer">Contact</a></button>
      </div>
      <div className="pg__navbar-menu">
        {ToggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {ToggleMenu && (
        <div className="pg__navbar-menu_container scale-up-center">
          <div className="pg__navbar-menu_container-links">
        <p><Link to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="About" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Work" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Footer" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
        <p><Link to="Review" spy={true} smooth={true} offset={50} duration={500}>Home</Link></p>
          <div className="pg__navbar-menu_container-links-sign">
            <p><a href="#top">Sign in</a></p>
            <button  type="button"><a href="https://docs.google.com/forms/d/e/1FAIpQLScpBHpTE__JlvC-cK2gRjS5ZIMIZryHYbtLY27UmNAMBpVGIw/viewform" target="_blank" rel="noreferrer">Contact</a></button>
          </div>
          </div>
      </div>)}
    </div>
</div>
)}


export default Navbar