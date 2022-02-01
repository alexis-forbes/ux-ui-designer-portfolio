import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import ProjectDetails2HeaderCinemaz from "../../components/Project-details2-header/project-details2-header-cinemaz";
import ProjectDate from "../../data/project-details2-cinemaz.json";
import ProjectIntroductionCinemaz from "../../components/Project-introduction/project-introduction-cinemaz";
import ProjectDescriptionCinemaz from "../../components/Project-description/project-description-cinemaz";
import ProjectVideo from "../../components/Project-video/project-video";
import NextProjectCinemaz from "../../components/Next-project/next-project-cinemaz";
import NextProjectCinemazCaseStudy from "../../components/Next-project/next-project-cinemaz-casestudy";
import ProjectGalleryLandscape6 from "../../components/Project-gallery/project-gallery-landscape6";
import ProjectGalleryLandscape7 from "../../components/Project-gallery/project-gallery-landscape7";
import ProjectGalleryLandscape8 from "../../components/Project-gallery/project-gallery-landscape8";
import ProjectGalleryLandscape9 from "../../components/Project-gallery/project-gallery-landscape9";
import ProjectGalleryLandscape10 from "../../components/Project-gallery/project-gallery-landscape10";
import ProjectDetailsColumnsCinemaz from "../../components/Services5/project-details-cinemaz";
import ProjectDetailsCinemazPainPoints from "../../components/Services2/project-details-cinemaz-painpoints";
import ProjectDetailsCinemazFindings from "../../components/Services2/project-details-cinemaz-findings";
import ProjectDescriptionCinemazMockups from "../../components/Project-description/project-description-cinemaz-mockups";
import ProjectDescriptionCinemazMockupsExtra from "../../components/Project-description/project-description-cinemaz-mockups-extra";
import ProjectDescriptionCinemazKey from "../../components/Project-description/project-description-cinemaz-key";
import ProjectDescriptionCinemazPrototype from "../../components/Project-description/project-description-cinemaz-prototype";
import ProjectDetailsCinemazTakaway from "../../components/Services5/project-details-cinemaz-takeaway";

const ProjectDetails2Light = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    React.useEffect(() => {
        var navbar = navbarRef.current,
            logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [navbarRef]);
    return (
        <LightTheme>
            <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
            <div className="wrapper">
                <ProjectDetails2HeaderCinemaz projectHeaderDataCinemaz={ProjectDate} />
                <ProjectIntroductionCinemaz projectIntroductionDataCinemaz={ProjectDate.intro} />
                <NextProjectCinemazCaseStudy />
                <ProjectDetailsColumnsCinemaz />
                <ProjectGalleryLandscape6 />
                <ProjectDescriptionCinemaz projectDescriptionDataCinemaz={ProjectDate.description} />
                <ProjectDetailsCinemazPainPoints />
                <ProjectGalleryLandscape7 />
                <ProjectDetailsCinemazFindings />
                <ProjectDescriptionCinemazMockups projectDescriptionDataCinemaz={ProjectDate.mockups} />
                <ProjectGalleryLandscape9 />
                <ProjectDescriptionCinemazMockupsExtra projectDescriptionDataCinemaz={ProjectDate.extra} />
                <ProjectDescriptionCinemazKey />
                <ProjectGalleryLandscape8 />
                <ProjectDescriptionCinemazPrototype projectDescriptionDataCinemaz={ProjectDate.prototype} />
                <ProjectGalleryLandscape10 />
                {/*<ProjectVideo projectVideoDate={ProjectDate} /> */}
                <NextProjectCinemaz />
                <ProjectDetailsCinemazTakaway />
                <Footer />
            </div>
        </LightTheme>
    );
};

export default ProjectDetails2Light;
