import React, { useState } from 'react';

function Navbar() {
  // State to manage whether the menu is open or not
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const show = () => {
    setIsMenuOpen(true);
  };

  const hide = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar fixed-top">
      <div className="myhead mt-2">
        <a href="#home" className=''>
          <img src="Logo.png" alt="Logo" id="logo" className='' />
        </a>
      </div>
      <div className="menu ">
        <ul className="nav nav-items " style={{ right: isMenuOpen ? '0' : '-200px' }}>
          <li><a className="nav-link fs-4 text-light" href="#home">Home</a></li>
          <li><a className="nav-link fs-4 text-light" href="#about">About</a></li>
          <li><a className="nav-link fs-4 text-light" href="#skill">Skills</a></li>
          <li><a className="nav-link fs-4 text-light" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link fs-4 text-light" href="#contact">Contact</a></li>
          <i className="fa-solid fa-arrow-right hide-btn" onClick={hide} style={{ display: isMenuOpen ? 'block' : 'none' }}></i>
        </ul>
        <i className="fa-solid fa-bars menu-btn" onClick={show} style={{ display: isMenuOpen ? 'none' : '' }}></i>
      </div>
    </nav>
  );
}

export default Navbar;
