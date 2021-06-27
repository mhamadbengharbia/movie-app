import React from 'react';
import PropTypes from 'prop-types';
const SearchBar = ({ handleSearch, setRatingSearch, ratingSearch }) => {
  return (
<div className='header'>
<input className='header2'type='text'placeholder='Enter your movie title'  onChange={handleSearch}/>
  </div>  );};
SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;