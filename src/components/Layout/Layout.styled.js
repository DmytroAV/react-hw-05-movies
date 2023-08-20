import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 70px;
  grid-template-areas:
  "header"
  "main"
  "footer";
  width: 100%;
  height: 100vh;
  grid-gap: 15px;
`;

export const Header = styled.header`
  grid-area: header;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: grid;
  grid-template-columns: 30% 1fr 15%;
  justify-items: center;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding: 5px 10px;
  color: #f6f8f9;
  font-style: italic;
  font-weight: 700;
  font-size: 20px;
  background-color: #5b8fc9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Main = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  row-gap: 15px;
  justify-items: center;
  align-self: self-start;
`;

export const Footer = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background-color: #5b8fc9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  width: 100%;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: #f6f8f9;
    &.active{
      color: #a33838;
    }
  }
`;

export const SvgContainer = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid #f6f8f9;
  svg {
    width: 40px;
    height: 40px;
    color: #f6f8f9;
  }
`;
