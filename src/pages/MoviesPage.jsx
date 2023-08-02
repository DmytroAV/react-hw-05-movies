import { useState, useEffect } from 'react';
import { fetchSearchMovies } from '../services/fetchAPI';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import MoviesList from '../components/MoviesList/MoviesList';
import { STATUS } from '../utils/status';
import { Loader } from '../components/Loader/Loader';
import ErrorCard from 'components/ErrorCard/ErrorCard';
import Paginate from 'components/Paginate/Paginate';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(0);
  const currentQuery = searchParams.get('query') ?? '';
  console.log('currentQuery :>> ', currentQuery);
  const pageNumber = searchParams.get('page') ?? 1;
  console.log('pageNumber :>> ', pageNumber);

  useEffect(() => {
    if (currentQuery === '') return;
    async function getSearchMovies(currentQuery, pageNumber) {
      setStatus(STATUS.PENDING);
      try {
        const { results, total_pages } = await fetchSearchMovies(
          currentQuery,
          pageNumber
        );
        if (total_pages > 500) {
          setPageCount(500);
        } else {
          setPageCount(total_pages);
        }
        setMovies(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    }
    getSearchMovies(currentQuery, pageNumber);
  }, [currentQuery, pageNumber]);

  const handlePageClick = e => {
    if (currentQuery === '') {
      setSearchParams({});
    }
    const currentPage = e.selected + 1;

    setSearchParams({
      query: `${currentQuery}`,
      page: `${currentPage}`,
    });
  };

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && movies.length > 0 && (
        <MoviesList movies={movies} />
      )}
      {status === STATUS.REJECTED && <ErrorCard error={error} />}
      {pageCount > 1 && (
        <Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
      )}
    </>
  );
};

export default Movies;
