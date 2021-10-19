import React from 'react'
import './hero.css'

const Hero = () => {
    return (
        <div className="container">
        <div className="hero-container">
            <div className="hero-display">
                <div className="hero-title">
                <h3>Hello<span className="span-color">,</span> 
                <br />I am Archit<span className="span-color">.</span></h3>
            </div>
            <div className="hero-sub-text">
                <h4>Developer <span className="span-color">&</span> Data Enthusiast
                <span className="span-color">.</span></h4>
            </div>
            </div>
        </div>
        </div>
        
    )
}

export default Hero
