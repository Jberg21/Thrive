import React from 'react';
import Signup from '../signup';

function Hero() {
    return (
        <section id="hero">
            
            <div className="container">
                <div className="overlay"></div>
                <div className="image-container"></div>
                
            </div>
            <div className="hero-text">
                <h1>
                    <span className="keyWord">Thrive <br /> Coaching and Cunsulting</span>
                    
                </h1>
                
                {/* <button className="buttonhero">
                    <a target="" href="/signup" >
                        <h3>Sign Up Today</h3>
                    </a>
                </button> */}
                
            </div>
        </section>
    )
}

export default Hero;