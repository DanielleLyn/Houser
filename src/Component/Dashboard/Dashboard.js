import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//import axios from 'axios';
import House from '../House/House';

export default class Dashboard extends Component{


    render() {
        

        return (
            <div>
            Dashboard
               <House />
               <Link to='/wizard'><button className='btn'>Add New Property</button></Link>
            </div>
           
        );
    }
}