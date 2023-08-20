import { StyledReactPaginate } from './Paginate.styled';
import PropTypes from 'prop-types';

const Paginate = ({ handlePageClick, pageCount, activePage }) => {
  return (
    <>
      <StyledReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={activePage}
      />
    </>
  );
};

Paginate.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default Paginate;
