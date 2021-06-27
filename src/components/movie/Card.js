import React from 'react';
import PropTypes from 'prop-types';
 import 'bootstrap/dist/css/bootstrap.min.css'
import Rate from '../search/Rate';
const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
      <div className="card mb-3">
  <div className="row no-gutters">
    <div className=" img-fluid">
    <img src={posterUrl}style={{ height: `300px`, maxWidth:'100%' }}/ >
    </div> 
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" >{title}</h5>
        <p className="blockquote" > {description}</p>
        <Rate rating={rate}/>
      </div>
    </div>
  </div>
</div>    
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
