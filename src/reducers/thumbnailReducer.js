import { CREATE_THUMB } from '../actions/thumbnailActions';

// array or object? \\
const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_THUMB:
      return [...state, { 
        imgUrl: action.payload.imgUrl, title: action.payload.title 
      }];
    default:
      return state;
  }
}
