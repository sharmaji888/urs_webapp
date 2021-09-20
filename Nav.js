// import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './Home';
import './Nav.css';
import pic from './dot.png';
import menu from './menu.png'
import {React, ReactDOM} from 'react';




function Nav(){

  var Fun= ()=> {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
   
  
    return(
      <div className='nav_main'>
        <ul className="nav flex-column" id ='nav_ul'>
        
        <li className="nav_item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/"><strong>Home</strong></a>
        </li>
        <li className="nav_item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/vision"><strong>Vision</strong></a>
        </li>
        <li className="nav_item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/Services"><strong>Service</strong></a>
        </li>
        <li className="nav_item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="Gallery"><strong>Gallery</strong></a>
        </li>
        <li className="nav_item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/About"><strong>About</strong></a>
        </li>
      </ul>
      
      <div className="topnav">
        <img className='size' src={menu} onClick={Fun}></img>
        <ul className="nav flex-column" id="myLinks">
          <li className="nav_item2">
            <img className='size' src={pic}/>
            <a className="nav-link" href="/"><strong>Home</strong></a>
          </li>
          <li className="nav_item2">
            <img className='size' src={pic}/>
            <a className="nav-link" href="/vision"><strong>Vision</strong></a>
          </li>
          <li className="nav_item2">
            <img className='size' src={pic}/>
            <a className="nav-link" href="/Services"><strong>Service</strong></a>
          </li>
          <li className="nav_item2">
            <img className='size' src={pic}/>
            <a className="nav-link" href="Gallery"><strong>Gallery</strong></a>
          </li >
          <li className="nav_item2">
            <img className='size' src={pic}/>
            <a className="nav-link" href="/About"><strong>About</strong></a>
          </li>       
        </ul >
      </div>

    </div>
  )
}

export default Nav;