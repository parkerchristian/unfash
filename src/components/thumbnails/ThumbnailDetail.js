import React from 'react';
import PropTypes from 'prop-types';

function ThumbnailDetail({ thumbnail }) {
  console.log('Detail:', thumbnail);
  return (
    <>
    <section>
      <h2>{thumbnail.title}</h2>
      <img src={thumbnail.imgUrl} />
    </section>
    <section>
      <h3>Comments:</h3>
    </section>
    </>
  );
}

ThumbnailDetail.propTypes = {
  thumbnail: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }).isRequired
};

export default ThumbnailDetail;
