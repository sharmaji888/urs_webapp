import './Body.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import Vision from './Vision';
import Services from './Services';
import Gallery from './Gallery';
import About from './About';

function Body(){
    return(<div>
        <BrowserRouter>
        <Route exact path ="/Home" component={Home} />
        <Route exact path ="/Vision" component={Vision} />
        <Route exact path ="/Services" component={Services} />
        <Route exact path ="/Gallery" component={Gallery} />
        <Route exact path ="/About" component={About} />
      </BrowserRouter>
        </div>
        
        
        
        );

}


export default Body;