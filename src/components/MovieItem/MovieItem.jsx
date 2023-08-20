import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import PropTypes from 'prop-types';
import {
  Container,
  BtnLinkGoBack,
  ImageMovie,
  InfoMovie,
  AddInfo,
  ContainerPlayer,
  ButtonContainer,
  LinkCast,
  LinkReviews,
} from './MovieItem.styled';
import Player from 'components/Player/Player';

export const MovieItem = ({ movie, backLinkHrefPef }) => {
  return (
    <Container>
      <BtnLinkGoBack to={backLinkHrefPef}>go back</BtnLinkGoBack>
      <ImageMovie
        src={`${
          movie.poster_path
            ? BASE_POSTER_URL + movie.poster_path
            : PLACEHOLDER + '?text=' + movie.original_title
        }`}
        alt="poster"
        width="250px"
      />
      <InfoMovie>
        {movie.title && <h2>{movie.title}</h2>}
        {movie.name && <h2>{movie.name}</h2>}
        <p>
          <span>Release date: </span>
          {movie.release_date}
        </p>
        <p>
          <span>Genres: </span>
          {movie.genres !== null
            ? movie.genres?.map(item => item.name).join(', ')
            : 'Unknown'}
        </p>
        <p>{movie.overview}</p>
        <p>
          {movie.vote_average !== 0 ? (
            <>
              <span>Rating: </span>
              {movie.vote_average} (based on {movie.vote_count} reviews)
            </>
          ) : (
            'No reviews yet'
          )}
        </p>
      </InfoMovie>
      <ContainerPlayer>
        <Player />
      </ContainerPlayer>
      <AddInfo>
        <ButtonContainer>
          <LinkCast to="cast">Cast</LinkCast>
          <LinkReviews to="reviews">Reviews</LinkReviews>
        </ButtonContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </AddInfo>
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
  backLinkHrefPef: PropTypes.objectOf(PropTypes.string).isRequired,
};
