export const getAllThumbs = state => {
  return state.thumbnails.map((thumbnail, index) => ({
    ...thumbnail, index
  }));
};

export const getThumbnail = (state, index) => {
  return getAllThumbs(state)[index];
}; 
