import React from 'react';
import './sports.css';
import Lottie from "lottie-react";
import lottieAnimation from './assets/Animation - 1724173594662.json';

export default function Sports(){
    return(
        <>
        {/* home section */}
        <section className='s-home' >
            <div className='s-home-text' > 
                <h1>this club is currently unavailable</h1>
            </div>
            <div className="s-home-logo">
                <Lottie animationData={lottieAnimation} loop={true} className='lottie' />   
            </div>
        </section>
    </>
    );
}