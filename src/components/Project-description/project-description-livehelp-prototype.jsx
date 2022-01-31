import React from "react";

const ProjectDescriptionLiveHelpPrototype = ({ projectDescriptionDataLiveHelp }) => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-lg-6">
                        <div className="htit">
                            <h4>
                                <span>06 </span> High-Fidelity Prototype:
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 offset-md-1 col-lg-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataLiveHelp.prototypecontent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionLiveHelpPrototype;
