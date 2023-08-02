import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(200px,1fr);
  overflow-x: auto;
  list-style: none;
  padding: 6px;
`;

export const ListItem = styled.li`
  grid-row: 1;
  grid-column: auto;
  width: 100%;
  height: auto;
  background-color: #eeecec;
  border: 1px solid #99b4c0;
  padding: 8px;

  h5 {
    margin: 10px 5px 0;
    font-size: 18px;
  }
`;
