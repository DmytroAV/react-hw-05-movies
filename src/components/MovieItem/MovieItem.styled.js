import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  row-gap: 20px;
  h3 {
    margin-left: 10px;
  }
`;
/*
 * Стиль компонента MovieItem
 */

export const ContainerMovie = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageMovie = styled.img`
  max-width: 70%;
  border: 2px solid #767272;
  border-radius: 3px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    /* cursor: zoom-in; */
  }
`;

export const InfoMovie = styled.div`
  display: grid;

`

export const OverviewMovie = styled.div`
  display: grid;

`

export const GenresMovie = styled.div`
  display: grid;

`


export const BtnLinkGoBack = styled(Link)`
  align-self: center;
  border: none;
  cursor: pointer;
  text-decoration: none;
  padding: 8px 15px 8px 15px;
  background: #a4a3a1;
  color: #fff;
  box-shadow: 1px 1px 4px #dadada;
  border-radius: 3px;
  width: 100px;
  margin-left: 10px;
  text-transform: uppercase;
  &:hover {
    background: #dadada;
    color: #605e5a;
  }
`;

export const TitleMovie = styled.h3`
    color: #363232;
    font-size: 18px;
`
export const ContainerAddInf = styled.div`
  display: grid;
 & h2 {
  color: red
 }
`
export const LinkInfo = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    &.active{
      color: red;
    }
`


// export const ContainerGallery = styled.ul`
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
// `;
  // display: inline-block;
  // width: 48px;
  // height: 48px;
  // border: 0;
  // background-size: 40%;
  // background-repeat: no-repeat;
  // background-position: center;
  // opacity: 0.6;
  // transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  // cursor: pointer;
  // outline: none;
  // &:hover {
  //   opacity: 1;
    // background-color: #bfbfbf;
  // }
