import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 1em;
  width: 100%;
  background: #ece9e6;
  background: -webkit-linear-gradient(to bottom, #ffffff, #ece9e6);
  background: linear-gradient(to bottom, #ffffff, #ece9e6);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

  -webkit-box-shadow: 0px 2px 4px 0px rgba(16, 75, 90, 1);
  -moz-box-shadow: 0px 2px 4px 0px rgba(16, 75, 90, 1);
  box-shadow: 0px 2px 4px 0px rgba(16, 75, 90, 1);

  .nav-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      font-weight: 700;
      font-size: 2rem;
    }
  }

  .nav-link-list {
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
  }

  @media screen and (orientation: landscape) and (max-width: 844px) {
    width: 30vw;
    height: 100vh;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  @media screen and (min-height: 845px) {
    flex-direction: row;
    border: 1px solid;
    justify-content: flex-start;
    gap: 1em;
    align-items: baseline;
    padding-top: 1.5em;
    max-height: 10vh;

    .nav-link-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: 1em;
    }
  }
`;

export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  padding: 1em 0 1em;
  font-size: 0;
  font-weight: 700;
  transition: all 200ms ease;
  border-bottom: none;
  opacity: 0;
  display: flex;
  justify-content: space-between;

  .fontAwesomeIcon {
    margin-right: .5em;
  }

  &:first-child {
    padding-top: 2em;
  }

  &.open {
    transform: scaleY(1);
    border-bottom: 1px solid grey;
    font-size: inherit;
    font-size: 2rem;
  }

  &.open:last-child {
    border-bottom: none;
    padding-bottom: 1em;
  }

  &.linkDisplay {
    opacity: 1;
  }

  @media screen and (orientation: landscape) and (max-width: 844px) {
    opacity: 1;
    display: flex;
    font-size: 1em;
    border-bottom: 1px solid grey;
    display: flex;

    &:last-child {
      border-bottom: none;
    }

    &.open {
      transform: none;
    }

    &.open:last-child {
      border-bottom: none;
      padding-bottom: 1em;
    }
  }

  @media screen and (min-height: 845px) {
    opacity: 1;
    font-size: 1rem;
    display: flex;
    gap: 1em;

    &:first-child {
      padding-top: 1em;
    }

    &.open {
      font-size: 1rem;
      border: none;
      
    }
  }
`;
