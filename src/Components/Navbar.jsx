import React from 'react';
import airbnb from '../assets/airbnb.png'
export default function Navbar(){
    return(
        <nav>
        <img src={airbnb} alt='logo' className='nav--logo'/>
        </nav>
    )
}