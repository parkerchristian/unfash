import reducer from './thumbnailReducer.js';
import { createThumb } from '../actions/thumbnailActions';

describe('thumbnail reducer', () => {
  it('handles the thumbnail action', () => {
    const newState = reducer([], createThumb('title', 'url'));
    expect(newState).toEqual([{ title: 'title', imgUrl: 'url' }]);
  });
});
