import React from 'react';
import './home.css';
import Lottie from "lottie-react";
import lottieAnimation from './assets/Animation - 1724018758249.json';

export default function header(){
    return(
        <div className="h-logo">
        <Lottie animationData={lottieAnimation} loop={true} className='lottieh' />
        <h1>WELCOME TO ESPRIM CLUBS</h1>
        <h3>please select a club</h3>
    </div>
    );
}