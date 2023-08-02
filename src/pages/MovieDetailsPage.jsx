import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/fetchAPI';
import { MovieItem } from '../components/MovieItem/MovieItem';
import { Loader } from '../components/Loader/Loader';
import { STATUS } from '../utils/status';
import ErrorCard from '../components/ErrorCard/ErrorCard';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHrefPef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getSearchMovies() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    }
    getSearchMovies();
  }, [movieId]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && (
        <MovieItem movie={movie} backLinkHrefPef={backLinkHrefPef.current} />
      )}
      {status === STATUS.REJECTED && <ErrorCard error={error} />}
    </>
  );
};

export default MovieDetails;
