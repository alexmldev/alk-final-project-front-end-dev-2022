import { faFaceGrin, faFaceGrinBeam, faFaceGrinHearts, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import HamburgerMenu from "../../uiUtils/HamburgerMenu/HamburgerMenu.component";
import { NavigationContainer, StyledNavlink } from "./navigation.styles";

const Navigation = () => {
  const { setPageView } = useContext(UserContext);
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isLinkDisplayed, setIsLinkDisplayed] = useState(false);

  const HamburgerClick = () => {
    if (!isLinkDisplayed) {
      setisMobileMenuOpen((prevState) => !prevState);
      setTimeout(() => setIsLinkDisplayed((prevState) => !prevState), 150);
    } else {
      setIsLinkDisplayed((prevState) => !prevState);
      setTimeout(() => setisMobileMenuOpen((prevState) => !prevState), 150);
    }
  };

  const handleLinkClick = (e) => {
    setIsLinkDisplayed((prevState) => !prevState);
    setTimeout(() => setisMobileMenuOpen((prevState) => !prevState), 150);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <div className="nav-top-bar">
          <div className="logo">Dev Memes</div>
          <HamburgerMenu
            isMobileMenuOpen={isMobileMenuOpen}
            HamburgerClick={HamburgerClick}
          />
        </div>
        <nav
          className={`nav-link-list ${isMobileMenuOpen ? "open" : ""} ${
            isLinkDisplayed ? "linkDisplay" : ""
          }`}
        >
          <StyledNavlink
            className={`nav-links latest ${isMobileMenuOpen ? "open" : ""} ${
              isLinkDisplayed ? "linkDisplay" : ""
            }`}
            to="/"
            onClick={(e) => handleLinkClick(e)}
          >
            <span>Latest</span>
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faLightbulb} />
          </StyledNavlink>
          <StyledNavlink
            className={`nav-links hot ${isMobileMenuOpen ? "open" : ""} ${
              isLinkDisplayed ? "linkDisplay" : ""
            }`}
            to="/hot"
            onClick={(e) => handleLinkClick(e)}
          >
            <span>On Fire</span>
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faFire} />
          </StyledNavlink>
          <StyledNavlink
            className={`nav-links heart ${isMobileMenuOpen ? "open" : ""} ${
              isLinkDisplayed ? "linkDisplay" : ""
            }`}
            to="/favourites"
            onClick={(e) => handleLinkClick(e)}
          >
            Favourites
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faFaceGrinHearts} />
          </StyledNavlink>
        </nav>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
