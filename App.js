// MAIN PAGE 
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import Nav from './Nav.js';
import Body from './Body.js';
import Footer from './Footer.js';
import logo from './logo.svg';
function App() {
  return (
     <div >    
      <div  id='logo' >
        <img className='logo_bg' src={logo} />
      </div>
      <div className="App">
        <div className='hole'></div>
      
        <div className='row'>
          <div className='col-lg-3 allign-items-left '><Nav /></div>
          <div className='col' id="bg-img"><Body /></div>
        </div>
      
    </div>
      <Footer />
    </div>
  );
}

export default App;
