import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTrending } from '../../services/fetchAPI';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import { STATUS } from '../../utils/status';
import ErrorCard from '../../components/ErrorCard/ErrorCard';
import Paginate from 'components/Paginate/Paginate';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const [pageCount, setPageCount] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') ?? 1;
  const activePage = parseInt(pageNumber - 1);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    async function getTrendingMovies(pageNumber) {
      try {
        const { results, total_pages } = await fetchTrending(pageNumber);

        if (results.length === 0) {
          setPageCount(null);
          return;
        }
        if (total_pages > 500) {
          setPageCount(500);
        } else {
          setPageCount(total_pages);
        }
        setTrendMovies(results);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error.message);
        setStatus(STATUS.REJECTED);
      }
    }
    getTrendingMovies(pageNumber);
  }, [pageNumber]);

  const handlePageClick = e => {
    const currentPage = e.selected + 1;
    setSearchParams({
      page: `${currentPage}`,
    });
  };

  return (
    <>
      {status === STATUS.PENDING && <Loader />}
      {status === STATUS.RESOLVED && trendMovies.length > 0 && (
        <MoviesList movies={trendMovies} title="Trending movies today" />
      )}
      {pageCount > 1 && (
        <Paginate
          handlePageClick={handlePageClick}
          pageCount={pageCount}
          activePage={activePage}
        />
      )}
      {status === STATUS.REJECTED && <ErrorCard message={error} />}
    </>
  );
};

export default HomePage;
