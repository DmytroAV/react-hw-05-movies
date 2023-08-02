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
        setCasts(cast);
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

  const items = filteredCasts(casts);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && (
        <List>
          {items?.map(
            item =>
              item.profile_path && (
                <ListItem key={item.id}>
                  <img
                    src={`${BASE_POSTER_URL + item.profile_path}`}
                    alt="profile"
                    width={200}
                  />
                  <h5>{item.name}</h5>
                </ListItem>
              )
          )}
        </List>
      )}
      {status === STATUS.REJECTED && <ErrorCard error={error} />}
    </>
  );
};

export default Cast;
