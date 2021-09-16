import React from 'react';
import './App.css';
// import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav.js'
import Body from './Body.js'
import Footer from './Footer.js'
// import Home from './Home';
// import Vision from './Vision';
// import Services from './Services';
// import Gallery from './Gallery';
// import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          
        </div>
      
      <div className='row'>
    
      <div className='col'><Nav /></div>
      <div className='col'><Body /></div>
      </div>
      <Footer />
      {/* <BrowserRouter>
        <Route exact path ="/Home" component={Home} />
        <Route exact path ="/Vision" component={Vision} />
        <Route exact path ="/Services" component={Services} />
        <Route exact path ="/Gallery" component={Gallery} />
        <Route exact path ="/About" component={About} />
      </BrowserRouter> */}
      </header>
      
    </div>
  );
}

export default App;
