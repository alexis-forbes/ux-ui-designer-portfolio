/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      var grid = document.querySelectorAll(".gallery");
      var iso;
      if (grid.length >= 1) {
        grid.forEach((item) => {
          iso = new Isotope(item, {
            itemSelector: ".items",
          });
        });
      }

      var filtersElem = document.querySelector(".filtering");
      if (filtersElem) {
        filtersElem.addEventListener("click", function (event) {
          if (!matchesSelector(event.target, "span")) {
            return;
          }
          var filterValue = event.target.getAttribute("data-filter");
          filterValue = filterValue;
          iso.arrange({ filter: filterValue });
        });
        var buttonGroups = document.querySelectorAll(".filtering");
        for (var i = 0, len = buttonGroups.length; i < len; i++) {
          var buttonGroup = buttonGroups[i];
          radioButtonGroup(buttonGroup);
        }
        function radioButtonGroup(buttonGroup) {
          buttonGroup.addEventListener("click", function (event) {
            if (!matchesSelector(event.target, "span")) {
              return;
            }
            buttonGroup.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
          });
        }
      }
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Feautured Work.
              </h6>
              {/*
              <h3 className="wow color-font">
                Our Recent Web Design & <br /> Some Past Projects.
              </h3>
              */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".ux">UX/UI Apps</span>
              <span data-filter=".graphic">Graphic Design</span>
              {/*}
              <span data-filter=".graphic">Creative</span>
            */}
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items ux wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>SIT & EAT</h6>
                  <p>UX / UI creative responsive app design for a restaurant booking app.</p>
                </div>
                <Link href="/project-details2/project-details2-light-sitandeat">
                  <a className="rota">
                    <img src="/img/sitandeat/0-FOTO-SIT&EAT.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Design</a>
                  </span>
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Food</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items ux wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>LIVE HELP</h6>
                  <p>UX / UI creative SmartWatch & Mobile app design for exercise and distress help.</p>
                </div>
                <Link href="/project-details2/project-details2-light-livehelp">
                  <a className="rota">
                    <img src="/img/livehelp/0-FOTO-LIVEHELP.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Design</a>
                  </span>
                  <span>
                    <a href="#0">Help</a>
                  </span>
                  <span>
                    <a href="#0">Fitness</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items ux wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>CINEMAZ</h6>
                  <p>UX / UI creative responsive app design for a Cinema Booking App.</p>
                </div>
                <Link href="/project-details2/project-details2-light-cinemaz">
                  <a className="rota">
                    <img src="/img/cinemaz/0-FOTO-CINEMAZ.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">App</a>
                  </span>
                  <span>
                    <a href="#0">Cinema</a>
                  </span>
                  <span>
                    <a href="#0">Design</a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 items graphic wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Content Creator & Graphic Designer</h6>
                  <p>Go to Full Screen Graphic Design projects</p>
                </div>
                <Link href="/showcase/showcase-light">
                  <a >
                    <img src="/img/design/cartel-roots-3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <a href="#0">Graphic</a>
                  </span>
                  <span>
                    <a href="#0">Design</a>
                  </span>
                  <span>
                    <a href="#0">Creative</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
