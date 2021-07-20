import React from 'react';
//import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Form from './form.js';
import Buttons from './navButton.js';
import Header from './header';
import Cards from './cards.js';
import Footer from './footer.js';
import Donutchart from './donut';
//import Particles from 'react-particles-js';
import Carouselslider from './carousel.js'
//import Routes from './routes.js'



const App = () => {
    
  return(
      
        <container>
            
        <div id='body'>
            
            <Header/>
            
            <Buttons/>
            <Cards/>
            <Carouselslider/>
            <Donutchart/>
            <Form/>
            <Footer/>
            {/* <Routes/> */}
        </div>
        </container>
    );
}


export default App;









