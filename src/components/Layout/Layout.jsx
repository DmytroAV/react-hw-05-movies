import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, Nav } from './Layout.styled';
import { Loader } from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <div>
          <p>LOGO</p>
        </div>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </Container>
  );
};

export default SharedLayout;
