import { Link, useLocation } from 'react-router-dom';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import PropTypes from 'prop-types';
import {
  ContainerGallery,
  ContainerMovie,
  ImageMovieWeb,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ContainerGallery>
        {movies?.map(movie => (
          <ContainerMovie key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImageMovieWeb
                src={`${
                  movie.poster_path
                    ? BASE_POSTER_URL + movie.poster_path
                    : PLACEHOLDER + '?text=' + movie.original_title
                }`}
                alt="poster movie"
              />
              {movie.title && <h3>{movie.title}</h3>}
              {movie.name && <h3>{movie.name}</h3>}
            </Link>
          </ContainerMovie>
        ))}
      </ContainerGallery>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
