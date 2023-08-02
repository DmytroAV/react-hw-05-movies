import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  overflow: auto;
  background-color: #eeecec;
  height: 400px;
  list-style: none;
  padding: 6px;
`;

export const ListItem = styled.li`
    grid-column: 1;
    grid-row: auto;
    width: 100%;
    height: auto;
    background-color: #fafafa;
    border: 1px solid #99b4c0;
    padding: 8px;

  h5 {
    margin: 10px 5px 0;
    font-size: 18px;
  }
`;
