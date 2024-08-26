import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar(){
    const [isActive, setIsActive] = useState(null);

    const toggleClass = (i) => {
        setIsActive(i);
    }

    return(
        <nav className='navbar'>
             < Link to="/" ><li className={isActive === 5 ? 'active6' : ''} onClick={() =>toggleClass(6)} id='st-home-icon'><i class='bx bx-home'></i><span>home</span></li></Link>
            <ul className='nav-menu'>
                <Link to="/robotic"><li className={isActive === 2 ? 'active3' : ''} onClick={() =>toggleClass(2)}><i class="fa-solid fa-robot"></i><span>robotic</span></li></Link>
                <Link to="/data" ><li  className={isActive === 1 ? 'active2' : ''} onClick={() =>toggleClass(1)}><i class="fa-solid fa-atom"></i><span>data science</span></li></Link>
                < Link to="/" ><li className={isActive === 5 ? 'active6' : ''} onClick={() =>toggleClass(6)} id='home-icon'><i class='bx bx-home'></i></li></Link>
                <Link to="/sports"><li className={isActive === 3 ? 'active4' : ''} onClick={() =>toggleClass(3)}><i class="fa-regular fa-futbol"></i><span>sports</span></li></Link>
                <Link to="/ea"><li className={isActive === 4 ? 'active5' : ''} onClick={() =>toggleClass(4)}><i class="fa-solid fa-headset"></i><span>ea sports</span></li></Link>
            </ul>
            <div></div>
        </nav>
    );
}