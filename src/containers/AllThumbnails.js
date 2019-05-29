import { connect } from 'react-redux';
import { getAllThumbs } from '../selectors/thumbnailSelector';
import Thumbnails from '../components/thumbnails/Thumbnails';

const mapStateToProps = state => ({
  thumbnails: getAllThumbs(state)
});

export default connect(
  mapStateToProps,
  null
)(Thumbnails);
