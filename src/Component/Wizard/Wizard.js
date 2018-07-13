import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';


export default class Wizard extends Component{


    render() {
        

        return (
            <div>
                
            Wizard
            <Link to='/'><button className='btn'>Cancel</button></Link>
            </div>
        );
    }
}