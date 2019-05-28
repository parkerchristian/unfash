import { combineReducers } from 'redux';
import thumbs from './thumbnailReducer';
import comments from './commentReducer';

export default combineReducers({
  thumbs, comments
});
