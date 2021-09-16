// import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './Home';


function Nav(){
    return(
      <div>
        <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="/Home">Home</a>
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