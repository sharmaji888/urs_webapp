import './Body.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Vision from './Vision';
import Service from './Service';
import Gallery from './Gallery';
import About from './About';

function Body(){
    return(
    <div id='body'>
      
      <BrowserRouter>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/Vision" component={Vision} />
        <Route exact path ="/Services" component={Service} />
        <Route exact path ="/Gallery" component={Gallery} />
        <Route exact path ="/About" component={About} />
      </BrowserRouter>
    </div>
        
        
        
  );

}


export default Body;