import styled from 'styled-components';
import { breakpoints, devices } from 'utils/constants';

/*
 * Стиль компонента ContainerGallery Movie
 */

export const ContainerGallery = styled.ul`
  display: grid;
  max-width: ${breakpoints.xl};
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media only screen and ${devices.md} and ${devices.mlg} {
    max-width: ${breakpoints.lg};
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }

  @media only screen and ${devices.sm} and ${devices.mmd} {
    max-width: ${breakpoints.md};
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }

  @media only screen and ${devices.xs} and ${devices.msm} {
    max-width: ${breakpoints.sm};
    grid-template-columns: repeat(1, minmax(240px, 1fr));
  }
`;

/*
 * Стиль компонента ContainerMovieItem
 */

export const ContainerMovie = styled.li`
  display: grid;
  grid-template-rows: 1fr 70px;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

   & a {
      display: block;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;

       & h3 {
          color: #0649a1;
          font-size: 18px;
        }
    }
`;

export const ImageMovieWeb = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 2px solid #767272;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.03);
    }

`;
