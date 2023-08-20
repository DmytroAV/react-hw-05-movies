import PropTypes from 'prop-types';
import { Container } from './ErrorCard.styled';

const ErrorCard = ({ message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

ErrorCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCard;
