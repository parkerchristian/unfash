import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail({ imgUrl, title }) {
  const styles = {
    width: '200px',
    height: 'auto'
  };

  return (
    <>
      <h3>{title}</h3>
      <img style={styles} src={imgUrl} />
    </>
  );
}

Thumbnail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Thumbnail;
