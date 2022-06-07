import { HamburgerMenuComponent } from "./HamburgerMenu.styles";

const HamburgerMenu = ({ HamburgerClick, isMobileMenuOpen }) => {
  const handleHamburgerClick = () => HamburgerClick();

  return (
    <HamburgerMenuComponent
      className={isMobileMenuOpen ? "open" : ""}
      onClick={handleHamburgerClick}
    >
      <div className="habmurgerMenu-middleBar"></div>
    </HamburgerMenuComponent>
  );
};

export default HamburgerMenu;
