import styled from 'styled-components';

/*
 * Стиль компонента FormSearch-form
 */

export const FormSearch = styled.form`
  display: grid;
  grid-template-columns: 1fr 40px;
  align-items: center;
  justify-self: center;
  height: 40px;
  width: 500px;
  background-color: #fff;
  border: 1px solid #9e9a9a;
  border-radius: 50px;
  overflow: hidden;
`;

/*
 * Стиль компонента FormSearch-input
 */

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-style: italic;
  font-size: 20px;
  outline: none;
  border: none;
  padding-left: 20px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

/*
 * Стиль компонента FormSearch-button
 */

export const ButtonSearch = styled.button`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  color: #3984d8;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background-color: #78b1ef;
    color: #fff;
  }
  svg {
    width: 22px;
    height: 22px;
  }
`;

