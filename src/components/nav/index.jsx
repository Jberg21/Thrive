import React from 'react';
import logo from '../../images/logo.png';

function Nav() {

    return (
        <section id="nav">
            
            <div class="nav-bar">
                <div className="links"> 
                <ulg></ulg>                   
                    <ul>
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo" className="logo" style={{height: 200}}></img></a>
                        <li><a href="/about" id="about">About the Program</a></li>
                        <li><a href="/coaching" id="about">Coaching Services</a></li>
                        <li><a href="/coaches" id="about">Meet our Coaches</a></li>
                        <li><a href="/signup" id="signup">Sign Up</a></li>
                        <li><a href="/lending" id="about">Lending Services</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Nav;