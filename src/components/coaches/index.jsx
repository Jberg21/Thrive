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
                                <h2 className="name">Debbie Hart</h2>
                                <div className="content">
                                    <p>
                                        Info about Debbie
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
                                <h2 className="name">Sam Williams</h2>
                                <div className="content">
                                    <p>
                                        Sam Bio
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
