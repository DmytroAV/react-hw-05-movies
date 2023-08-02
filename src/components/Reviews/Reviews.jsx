import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovie } from '../../services/fetchAPI';
import { Loader } from '../Loader/Loader';
import { STATUS } from '../../utils/status';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import { List, ListItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getCastMovie() {
      try {
        const { results } = await fetchReviewsMovie(movieId);
        setReviews(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    }
    getCastMovie();
  }, [movieId]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && reviews.length > 0 ? (
        <List>
          {reviews.map(({ id, author_details, content }) => (
            <ListItem key={id}>
              <h5>{author_details.username}</h5>
              <p>{content}</p>
            </ListItem>
          ))}
        </List>
      ) : (
        <div>
          <p>Don`t reviews</p>
        </div>
      )}
      {status === STATUS.REJECTED && <ErrorCard error={error} />}
    </>
  );
};

export default Reviews;
