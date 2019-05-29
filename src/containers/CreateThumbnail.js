import { connect } from 'react-redux';
import { createThumb } from '../actions/thumbnailActions';
import ThumbnailForm from '../components/thumbnails/ThumbnailForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, imgUrl) {
    dispatch(createThumb(title, imgUrl));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ThumbnailForm);
