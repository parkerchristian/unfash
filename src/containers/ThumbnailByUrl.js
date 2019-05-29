import { connect } from 'react-redux';
import ThumbnailDetail from '../components/thumbnails/ThumbnailDetail';
import { getThumbnail } from '../selectors/thumbnailSelector';

const mapStateToProps = (state, props) => ({
  thumbnail: getThumbnail(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(ThumbnailDetail);
