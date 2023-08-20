import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 12px;
  border-radius: 5px;
  border: 2px solid #d8dae5;
  /* background-color: #d8dae5; */
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  gap: 10px;
  width: 100%;
  color: #3984d8;
  /* font-size: larger; */
  list-style: none;
    .page-item {
      border: 2px solid #3984d8;
      border-radius: 50%;
      &.${props => props.activeClassName} {
          background-color: #3984d8;
          color: #fff;
        }
      }
      .page-link {
        display: grid;
        justify-content: center;
        align-content: center;
        cursor: pointer;
        width: 55px;
        height: 55px;
        font-size: 20px;
        font-weight: 600;
      }
`
