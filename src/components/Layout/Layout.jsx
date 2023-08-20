import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { SiThemoviedatabase } from 'react-icons/si';
import {
  Container,
  Footer,
  Header,
  Main,
  Nav,
  SvgContainer,
} from './Layout.styled';
import { Loader } from '../Loader/Loader';
import ScrollToTopBtn from '../ScrollToTopBtn/ScrollToTopBtn';
import { GlobalStyle } from '../GlobalStyles.styled';
import Copyright from '../Copyright/Copyright';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <SvgContainer>
          <SiThemoviedatabase width="150px" />
        </SvgContainer>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollToTopBtn />
      </Main>
      <Footer>
        <Copyright />
      </Footer>
      <GlobalStyle />
    </Container>
  );
};

export default SharedLayout;
