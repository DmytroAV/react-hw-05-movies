import styled from 'styled-components';

/*
 * Стиль компонента FormSearch-form
 */

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  background-color: #fff;
  border-radius: 3px;
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
  border: 1px solid #9e9a9a;
  outline: none;
  padding-left: 4px;
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
  display: inline-block;
  width: 80px;
  height: 28px;
  border: 0;
  background-size: 40%;
  background-color: #9e9a9a;;
  border-radius: 2px;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background-color: #bfbfbf;
  }
`;

