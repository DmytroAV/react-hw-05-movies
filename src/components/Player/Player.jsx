import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { STATUS } from '../../utils/status';
import { fetchMovieVideo } from 'services/fetchAPI';
import { Loader } from 'components/Loader/Loader';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import { PlayerWrapper } from './Player.styled';
import { useParams } from 'react-router-dom';

const Player = () => {
  const [keyVideo, setKeyVideo] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getMovieVideo() {
      try {
        const { results } = await fetchMovieVideo(movieId);
        if (results.length === 0) {
          setStatus(STATUS.RESOLVED);
          return;
        } else {
          const itemKey = results.find(item => item.type === 'Trailer').key;
          setKeyVideo(itemKey);
        }
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    }
    getMovieVideo();
  }, [movieId]);

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && keyVideo && (
        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            controls={true}
            url={`https://www.youtube.com/watch?v=${keyVideo}`}
          />
        </PlayerWrapper>
      )}
      {status === STATUS.REJECTED && <ErrorCard error={error} />}
    </>
  );
};

export default Player;
