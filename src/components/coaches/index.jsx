import React from 'react';
// import Signup from '../signup';

function Coaches() {
    return (

        <section id="coaches">
            <div className="coaches-container">
                <div className="coaches-title-header">Meet our Coaches</div>
                <div className="coaches">

                    {/* Coach 1 */}
                    <div className="coach-item">
                        <div className="debbie">
                            <div className="coaches-text-container">
                                <h2 className="name">Carli</h2>
                                <div className="content">
                                    <p>
                                    Carli is a mother of 3 young children and has always worked while caring for them. She has learned the balancing act of working full time and juggling home life. She loves proving that you don’t need to use 40 hours of time to put in 40 hours of work. Carli has over 5 years’ experience in coaching and creating training programs and she loves connecting with other moms and learning what we all do to “keep it all together”. 
                                    </p>
                                </div>
                                <button className="button-coaches">
                                    <a href="/signup">
                                        <h3>Request this Coach</h3>
                                    </a>
                                </button>

                            </div>
                        </div>
                    </div>
                    {/* Coach 2 */}
                    <div className="coach-item">
                        <div className="sam">
                            <div className="coaches-text-container">
                                <h2 className="name">Carrie</h2>
                                <div className="content">
                                    <p>
                                    Carrie is a mother of 3 older children and has both worked outside the home and stayed home while raising them. She knows how healthy it can be for moms to work and connect with other adults. Carrie has training and experience in energy psychology and coaching women to be healthier and happier in finding balance in life. 
                                    </p>
                                </div>
                                <button className="button-coaches">
                                    <a href="/signup">
                                        <h3>Request this Coach</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coaches;
