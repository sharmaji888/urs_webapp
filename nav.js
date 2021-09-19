// import {BrowserRouter, Route} from 'react-router-dom';
import React, { useState } from "react";
// import Home from './Home';
import './Nav.css';
import pic from './dot.png';
// import { Navbar,Container} from 'react-bootstrap';
import { GiHamburgerMenu, setShowMediaIcons,showMediaIcons } from "react-icons/gi";

const Nav = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <div>


        <ul className="nav flex-column" id ='nav_ul'>
        
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>

        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/">Home</a>
        </li>
</div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/vision">Vision</a>
        </li>
</div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/Services">Service</a>
        </li>
</div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="Gallery">Gallery</a>
        </li>
</div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/About">About</a>
        </li>
</div>

      </ul>
      <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
     
      </div>
    
      </>
  );
};

export default Nav;
