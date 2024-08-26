import React from 'react';
import './ea.css';
import Lottie from "lottie-react";
import lottieAnimation from './assets/Animation - 1724173757332.json';

export default function Ea(){
    return(
        <>
        {/* home section */}
        <section className='ea-home' >
            <div className='ea-home-text' > 
                <h1>this club is currently unavailable</h1>
            </div>
            <div className="ea-home-logo">
                <Lottie animationData={lottieAnimation} loop={true} className='lottie' />   
            </div>
        </section>
    </>
    );
}