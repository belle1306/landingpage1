import React, {Component} from 'react';
//import { Link} from 'react-router-dom'; //deleted withRouter, BrowserRouter,
//import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'



class Buttons extends Component {
    render(){

        return(
            <container className="button-container">
            <div>
            
               
            {/* <Link to="/Carouselslider">  */}
            <button className="navbutton">Portfolio</button>
            {/* </Link> */}
            <button className="navbutton">Pages</button>
            <button className="navbutton">Features</button>
            <button className="navbutton">Megamenu</button>
            <button className="navbutton">Contact</button>

            {/* <Button variant ="btn btn-primary" >Blog</Button>
            <Button variant ="btn btn-primary">Pages</Button>
            <Button variant ="btn btn-primary" >Features</Button>
            <Button variant ="btn btn-primary">Megamenu</Button>
            <Button variant ="btn btn-primary" >Contact</Button> */}

            </div>
            </container>
        )
    }
}

export default Buttons