import { Link, useLocation } from 'react-router-dom';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../utils/constants';
import PropTypes from 'prop-types';
import {
  ContainerGallery,
  ContainerMovie,
  ImageMovieWeb,
  TitleMovie,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
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
                width={300}
              />
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
            </Link>
          </ContainerMovie>
        ))}
      </ContainerGallery>
    </div>
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
  ),
};

export default MoviesList;
