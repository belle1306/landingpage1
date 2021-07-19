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



const App = () => {
  
  return(
        <container>
        <div id='body'>
            
            <Header/>
            <Buttons/>
            <Cards/>
            <Donutchart/>
            <Form/>
            <Footer/>
           
        </div>
        </container>
    );
}


export default App;









