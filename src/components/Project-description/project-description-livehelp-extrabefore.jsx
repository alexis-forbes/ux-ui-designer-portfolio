import React from "react";

const ProjectDescriptionLiveHelpExtraBefore = ({ projectDescriptionDataLiveHelp }) => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-lg-6">
                        <div className="htit">
                            <h4>
                                <span>04 </span> Before & After Usability Study:
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 offset-md-1 col-lg-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataLiveHelp.extracontent}</p>
                            <br></br>
                            <p className="extra-text">Additional design changes included the addition of an explanatory listening feature on all screens for the visually impaired. Also added an arrow to go back to the previous page. And the app logo at the bottom of the screen to access the main menu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionLiveHelpExtraBefore;
