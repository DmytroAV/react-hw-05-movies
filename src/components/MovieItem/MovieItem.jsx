import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerMovie,
  BtnLinkGoBack,
  ImageMovie,
  InfoMovie,
  TitleMovie,
  OverviewMovie,
  GenresMovie,
  ContainerAddInf,
  LinkInfo,
} from './MovieItem.styled';

export const MovieItem = ({ movie, backLinkHrefPef }) => {
  return (
    <Container>
      <BtnLinkGoBack to={backLinkHrefPef}>go back</BtnLinkGoBack>
      <ContainerMovie>
        <ImageMovie
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + movie.original_title
          }`}
          alt="poster"
        />
        <InfoMovie>
          {movie.title && (
            <TitleMovie>
              {movie.title} ({movie.release_date?.substring(0, 4)})
            </TitleMovie>
          )}
          {movie.name && (
            <TitleMovie>
              {movie.name} ({movie.first_air_date?.substring(0, 4)})
            </TitleMovie>
          )}
          <h4>User Score: {Math.round(movie.popularity / 100)} %</h4>

          <OverviewMovie>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </OverviewMovie>
          <GenresMovie>
            <h4>Genres</h4>
            {movie.genres?.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </GenresMovie>
        </InfoMovie>
      </ContainerMovie>
      <ContainerAddInf>
        <h2>Additional information</h2>
        <LinkInfo to="cast">Cast</LinkInfo>
        <LinkInfo to="reviews">Reviews</LinkInfo>
      </ContainerAddInf>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    popularity: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
      })
    ),
  }),
  backLinkHrefPef: PropTypes.objectOf(PropTypes.string),
};
