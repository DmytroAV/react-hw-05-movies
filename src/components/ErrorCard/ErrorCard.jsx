import PropTypes from 'prop-types';

const ErrorCard = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

ErrorCard.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorCard;
