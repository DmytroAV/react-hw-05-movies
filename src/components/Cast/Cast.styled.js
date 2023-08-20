import styled from 'styled-components';

export const List = styled.ul`
  grid-area: info;
  display: grid;
  grid-gap: 10px;
  width: 100%;
  grid-template-columns: repeat(auto-fill,minmax(230px,1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(230px,1fr);
  overflow-x: auto;
  list-style: none;
  padding: 10px;
  border: 1px solid darkblue;
`;

export const ListItem = styled.li`
  display: grid;
  grid-column: auto;
  grid-template-rows: 84% 20px 20px;
  row-gap: 10px;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #eeecec;
  border: 1px solid #99b4c0;
  padding: 8px;

    & h5 {
      margin: 10px 5px 0;
      font-size: 18px;
    }

`;
