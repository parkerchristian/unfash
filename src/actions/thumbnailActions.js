export const CREATE_THUMB = 'CREATE_THUMB';

export const createThumb = (title, imgUrl) => ({
  type: CREATE_THUMB,
  payload: { title, imgUrl }
});


