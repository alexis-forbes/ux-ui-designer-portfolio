import React from "react";

const ProjectDescriptionCinemazMockupsExtra = ({ projectDescriptionDataCinemaz }) => {
    return (
        <section className="intro-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-11 offset-lg-1 col-md-8">
                        <div className="text js-scroll__content">
                            <p className="extra-text">{projectDescriptionDataCinemaz.extracontent}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDescriptionCinemazMockupsExtra;
