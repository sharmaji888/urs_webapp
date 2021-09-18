// import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './Home';
import './Nav.css';
import pic from './lacmta-circle-gold-line-818978.png';


function Nav(){
    return(
      <div>
        <ul className="nav flex-column">
        
        <li className="nav-item">
        {/* <p className='temp'/> */}

          <span className='a'>
          <img className='size' src={pic}/>
          </span>
          <span className='a'>
            <a className="nav-link" href="/">Home</a>
          </span>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/vision">Vision</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Services">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
      </ul></div>
    )
}

export default Nav;