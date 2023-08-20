import styled from 'styled-components';

export const List = styled.ul`
  grid-area: info;
  display: grid;
  width: 100%;
  max-height: 400px;
  grid-gap: 10px;
  margin: 0;
  overflow: auto;
  background-color: #f9f9f9;
  list-style: none;
  padding: 10px;
  border: 1px solid #99b4c0;
`;

export const ListItem = styled.li`
  grid-column: 1;
  grid-row: auto;
  width: 100%;
  height: auto;
  background-color: #f6f8f9;
  border: 1px solid #99b4c0;
  padding: 8px;

    & h5 {
      margin: 10px 5px 0;
      font-size: 18px;
      color: #0649a1;
    }

    & p {
      font-size: 16px;
      text-indent: 3ch;
      font-weight: 500;
    }

    & .show-more-less-clickable {
    cursor: pointer;
    font-weight: 500;
    color: #5b8fc9;
    width: 110px;

      &:hover {
        background: #78b1ef;
        color: #f6f8f9;
        border: 2px solid #f6f8f9;
        text-decoration: none;
        border-radius: 3px;
        padding: 3px;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }
    }
`;
