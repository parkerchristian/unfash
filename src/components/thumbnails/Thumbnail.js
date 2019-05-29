import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Thumbnail({ imgUrl, title, index }) {
  const styles = {
    width: '200px',
    height: 'auto'
  };

  return (
    <>
      <Link to={`/${index}`}>
        <h3>{title}</h3>
        <img style={styles} src={imgUrl} />
      </Link>
    </>
  );
}

Thumbnail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default Thumbnail;
