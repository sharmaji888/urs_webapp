// import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './Home';
import './Nav.css';
import pic from './dot.png';


function Nav(){
    return(
      <div>
        <ul className="nav flex-column" id ='nav_ul'>
        
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/vision">Vision</a>
        </li>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/Services">Service</a>
        </li>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="Gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <img className='size' src={pic}/>
          <a className="nav-link" href="/About">About</a>
        </li>
      </ul></div>
    )
}

export default Nav;