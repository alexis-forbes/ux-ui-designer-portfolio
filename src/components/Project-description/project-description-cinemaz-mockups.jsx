import React from "react";

const ProjectDescriptionCinemazMockups = ({ projectDescriptionDataCinemaz }) => {
    return (
        <section className="intro-section ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-lg-4">
                        <div className="htit">
                            <h4>
                                <span>03 </span> Mockups
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-11 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataCinemaz.mockupcontent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionCinemazMockups;
