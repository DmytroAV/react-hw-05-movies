import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from '../../services/fetchAPI';
import { Loader } from '../Loader/Loader';
import { BASE_POSTER_URL } from '../../utils/constants';
import { STATUS } from '../../utils/status';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import { List, ListItem } from './Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getCastMovie() {
      try {
        const { cast } = await fetchCastMovie(movieId);
        setCasts(filteredCasts(cast));
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    }
    getCastMovie();
  }, [movieId]);

  const filteredCasts = items => {
    const filteredArray = [];
    items.filter(item => {
      if (!filteredArray.some(element => element.id === item.id)) {
        filteredArray.push(item);
      }
      return filteredArray;
    });
    return filteredArray;
  };

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && casts.length > 0 ? (
        <List>
          {casts?.map(
            cast =>
              cast.profile_path && (
                <ListItem key={cast.id}>
                  <img
                    src={`${BASE_POSTER_URL + cast.profile_path}`}
                    alt="profile"
                    width={230}
                  />
                  <h5>{cast.name}</h5>
                  <p>({cast.character})</p>
                </ListItem>
              )
          )}
        </List>
      ) : (
        <ErrorCard message="There are no cast yet..." />
      )}
      {status === STATUS.REJECTED && <ErrorCard error={error} />}
    </>
  );
};

export default Cast;
