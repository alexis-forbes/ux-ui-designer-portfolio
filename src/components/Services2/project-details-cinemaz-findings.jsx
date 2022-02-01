import React from 'react'

const ProjectDetailsCinemazFindings = () => {
    return (
        <section className="services section-padding position-re">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="sec-head  text-center">
                            <h6 className="wow fadeIn" data-wow-delay=".5s">
                                USABILITY STUDY: FINDINGS
                            </h6>
                            <h7 className="wow fadeIn">
                                I conducted two rounds of usability studies. Findings from the first study helped guide the designs from wireframes to mockups. The second study used a high-fidelity prototype and revealed what aspects of the mockups needed refining.
                            </h7>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="step-item xtop">
                            <h6>Round 1 Findings</h6>
                            <p>
                                <li>1. Users want to book as fast as
                                    possible so that tickets are not sold out.
                                </li>
                                <li>2. Users want more customization options.</li>
                                <li>3. Users want to access the Homepage
                                    easier.</li>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="step-item xtop">
                            <h6>Round 2 Findings</h6>
                            <p>
                                <li>1. Participants can ́t find the way back
                                    on the confirmation frame.
                                </li>
                                <li>2. I added the basket button to access the information and modify the order.</li>
                                <li>3. People are used to click the back
                                    button on the left side of the screen.</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetailsCinemazFindings;