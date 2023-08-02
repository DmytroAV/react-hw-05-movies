import { StyledReactPaginate } from './Paginate.styled';
import PropTypes from 'prop-types';

const Paginate = ({ handlePageClick, pageCount }) => {
  return (
    <>
      <StyledReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

Paginate.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Paginate;
