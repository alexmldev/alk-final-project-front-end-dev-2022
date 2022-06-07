import styled from "styled-components";

export const HamburgerMenuComponent = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
  align-items: flex-end;

  .habmurgerMenu-middleBar {
    width: 50px;
    height: 6px;
    background-color: black;
    border-radius: 5px;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 6px;
      background: black;
      border-radius: 5px;
      -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
      transition: all 200ms ease-in-out;
    }

    &::before {
      transform: translateY(-16px);
    }
    &::after {
      transform: translateY(16px);
    }
  }

  &.open {
    .habmurgerMenu-middleBar {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;

      &::before {
        transform: rotate(45deg) translate(35px, -35px);
      }
      &::after {
        transform: rotate(-45deg) translate(35px, 35px);
      }
    }
  }

  @media screen and (orientation: landscape) and (max-width: 844px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
