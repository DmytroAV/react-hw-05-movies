import { styled } from 'styled-components';

export const BtnScrollTo = styled.button`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 55px;
  height: 55px;
  position: fixed;
  bottom: 20%;
  right: 5%;
  color: #3984d8;
  background-color: transparent;
  cursor: pointer;
  padding: 2px;
  border-radius: 50%;
  border: 2px solid #3984d8;
  &:hover {
    border: 2px solid #78b1ef;
    color: #78b1ef;
  },
  &:focus {
    border: 2px solid #78b1ef;
    color: #78b1ef;
  },
  svg {
    width: 35px;
    height: 35px;
  }

`
