import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail({ imgUrl, title }) {
  return (
    <>
      <h3>{title}</h3>
      <img src={imgUrl} />
    </>
  );
}

Thumbnail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Thumbnail;
