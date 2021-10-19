import React from 'react'
import './header.css'

function Header() {
    return (
        <div className="container">
            <div className="header-container">
            <div className="header">
                <div className="logo">
                    <h3>AJ<span className="logo-dot">.</span></h3>
                </div>
                <div className="header-items">
                    {/* <div className="header-item">
                        <a href="#home"><h3>Home</h3></a>
                    </div> */}
                    <div className="header-item">
                    <a href="#about"><h3>About</h3></a>
                    </div>
                    <div className="header-item">
                    <a href="#skills"><h3>Skills</h3></a>
                    </div>
                    <div className="header-item">
                    <a href="#projects"><h3>Projects</h3></a>
                    </div>
                    <div className="header-item">
                    <a href="#contact"><h3>Contact</h3></a>
                    </div>

                </div>
        </div>
            </div>
        </div>
        
    )
}

export default Header
