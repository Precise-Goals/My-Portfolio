import React from 'react';
import { Link } from 'react-scroll';

import './navbar.css';
import vidbg from '../../assets/resources/vidbg.mp4';
import logo from '../../assets/resources/navlogo.png';

const menuLinks = [
  { to: "top", text: "Home", offset: -100 },
  { to: "About", text: "About", offset: -15 },
  { to: "Work", text: "Work", offset: -25 },
  { to: "Review", text: "Reviews", offset: 0 },
  { to: "Contact", text: "Contact", offset: -100 },
];

const Navbar = () => {

  return (
    <div className='Navbar' id='Navbar'>
      <div className='filters'>
        <div className='navlogo'>
          <Link to="top" spy={true} smooth={true} offset={-100} duration={300} delay >
            <img src={logo} alt="logo" loading="lazy" width="160px" height="100px" />
          </Link>
        </div>
        <div className='linktabs'>
          {menuLinks.map(({ to, text, offset }) => (
            <p key={to}>
              <Link to={to} spy={true} smooth={true} offset={offset} duration={300} delay={-1}>
                {text}
              </Link>
            </p>
          ))}
          <a href="https://precise-forms.pages.dev/" target="_blank" rel="noreferrer">
            <button type="button">Reach out</button>
          </a>
        </div>
      </div>
      <video loop autoPlay muted playsInline className='yay'>
        <source src={vidbg} />
      </video>
    </div>
  )
}

export default Navbar;
