import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { FormSearch, Input, ButtonSearch } from './SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleChangeInput = e => {
    const value = e.target.value.toLowerCase().trim();

    setQuery(value);
  };

  const handleSubmitInput = e => {
    e.preventDefault();
    if (query === '') {
      setSearchParams({});
    }
    setSearchParams({ query });

    setQuery('');
  };
  return (
    <FormSearch onSubmit={handleSubmitInput}>
      <Input
        name="query"
        value={query}
        onChange={handleChangeInput}
        type="text"
        autoComplete="off"
        autoFocus={true}
        placeholder="Search movies"
      />
      <ButtonSearch type="submit" disabled={!query}>
        <BsSearch />
      </ButtonSearch>
    </FormSearch>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default SearchForm;
