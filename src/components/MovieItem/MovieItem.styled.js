import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { breakpoints, devices } from "utils/constants";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  justify-items: center;
  max-width: 1180px;
  row-gap: 20px;
  padding: 10px;
  grid-template-areas:
  "goback goback"
  "image infoMovie"
  "player player"
  "addInfo addInfo"
  "info info";
  background-color: #e9e9e9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media only screen and ${devices.msm} {
    max-width: ${breakpoints.md};
    grid-template-columns: 1fr;
    grid-template-areas:
  "goback"
  "image"
  "infoMovie"
  "player"
  "addInfo"
  "info";
  }
`;

export const ImageMovie = styled.img`
  grid-area: image;
  justify-self: center;
  width: 80%;
  border: 1px solid #0649a1;
  border-radius: 3px;
`;

export const InfoMovie = styled.div`
  display: grid;
  grid-template-rows: 15% 15% 15% 1fr 15%;
  grid-area: infoMovie;
  padding-right: 15px;

  & h2 {
    color: #0649a1;
    font-size: 24px;
  }

  & span {
    font-size: 20px;
    font-weight: 700;
    color: #0649a1;
  }

  & p {
    font-size: 18px;
    font-weight: 600;
  }

  @media only screen and ${devices.msm} {
    padding: 15px;

    & h2 {
      justify-self: center;
    }

    & p {
      justify-self: center;
    }
  }

`;

export const ContainerPlayer = styled.div`
  grid-area: player;
  display: grid;
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 20px;
  margin: 20px 0;
  & div {
    margin-bottom: 20px;
  }
`;

export const AddInfo = styled.div`
  grid-area: addInfo;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
      "button"
      "info";
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  row-gap: 30px;
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  grid-area: button;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 320px;
`;

export const Button = styled(NavLink)`
  display: grid;
  justify-content: center;
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  font-weight: 800;
  border: 3px solid #5b8fc9;
  padding: 8px 10px 8px 10px;
  color: #5b8fc9;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  width: 100px;
  text-transform: uppercase;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: #78b1ef;
    color: #f6f8f9;
    border: 3px solid #f6f8f9;
  }
`;

export const LinkCast = styled(Button)`

  &.active{
    background: #78b1ef;
    color: #f6f8f9;
    border: 3px solid #f6f8f9;
    pointer-events: none;
    }
`;

export const LinkReviews = styled(Button)`

  &.active{
    background: #78b1ef;
    color: #f6f8f9;
    border: 3px solid #f6f8f9;
    pointer-events: none;
    }
`;

export const BtnLinkGoBack = styled(Button)`
  grid-area: goback;
  justify-self: start;
  margin: 20px 50px;
`;
