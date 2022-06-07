import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Card = styled.div`
  padding: 1em;
  margin-bottom: 1em;
  background-color: white;
  border-radius: 1em;

  -webkit-box-shadow: 0px 2px 4px 0px rgba(33, 147, 176, 1);
  -moz-box-shadow: 0px 2px 4px 0px rgba(33, 147, 176, 1);
  box-shadow: 0px 2px 4px 0px rgba(33, 147, 176, 1);

  @media screen and (orientation: landscape) and (max-width: 844px) {
    display: flex;
    height: 95vh;
    width: 66vw;
    padding: 1em;
    gap: 1em;
    margin-left: auto;
    justify-content: space-between;
  }

  @media screen and (min-height: 850px) {
    &:first-child{
      margin-top: 1em;
    }
    img {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  margin-bottom: 1em;

  @media screen and (orientation: landscape) and (max-width: 844px) {
    margin-bottom: 0;
  }

  img {
    @media screen and (orientation: landscape) and (max-width: 844px) {
      max-height: 100%;
    }
  }
`;

export const CardControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .count {
    flex: 0 0 20%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: rgba(33, 147, 176, 1);
    font-size: 1.5rem;
  }

  @media screen and (orientation: landscape) and (max-width: 844px) {
    display: flex;
    flex-direction: column;
    min-width: 48px;
    min-height: 48px;
    justify-content: space-around;
    align-items: center;

    .count {
      align-items: center;
    }
  }
`;

export const CardControlIconHotspot = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CardControlIcon = styled(FontAwesomeIcon)`
  width: 36px;
  height: 36px;
  color: rgba(33, 147, 176, 1);
  flex: 0 0 20%;
`;
