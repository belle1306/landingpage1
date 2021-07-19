import React, {Component} from 'react';
//import { Card } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';
import home from './assets/home.jpg'

class Header extends Component{
    render(){
        
    return(
        <container>
        <div className='banner'>
            <img src ={home} alt ="home"></img>
            <span className='header-title'>
                Company
            </span>
            <br/>
            <span className="header-text">
                We specialise in something ...
            </span>

            
            
            
        </div>
        </container>
        
        )
    }

}

export default Header;