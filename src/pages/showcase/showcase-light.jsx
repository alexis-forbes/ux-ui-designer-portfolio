import React from "react";
import Navbar from "../../components/Navbar/navbar";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import LightTheme from "../../layouts/Dark";

const ShowcaseLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <ShowcasesFullScreen />
    </LightTheme>
  );
};

export default ShowcaseLight;
