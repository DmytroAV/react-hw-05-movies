import styled from 'styled-components';

/*
 * Стиль компонента ContainerGallery Movie
 */

export const ContainerGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
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
    a {
      text-transform: uppercase;
      text-decoration: none;
    }
`;

export const ImageMovieWeb = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 2px solid #767272;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const TitleMovie = styled.h3`
     color: #363232;
    font-size: 18px;
`
