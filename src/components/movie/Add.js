import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalComp from '../movie/Modal';
const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div  >
        <button className='header1' onClick={() => setShow(true)}> Add a movie </button>
      {show && ( <ModalComp isOpen={show} toggle={toggleShow} handleAdd={handleAdd} /> )}</div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;