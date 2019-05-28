import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

function Thumbnails({ thumbnails }) {
  const thumbnailList = thumbnails.map(thumbnail => (
    <li key={thumbnail.imgUrl}>
      <Thumbnail imgUrl={thumbnail.imgUrl} title={thumbnail.title} />
    </li>
  ));
  return (
    <ul>{thumbnailList}</ul>
  );
}

Thumbnails.propTypes = {
  thumbnails: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Thumbnails;
