export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openmodal = (postId) => ({
  type: OPEN_MODAL,
  payload: postId,
});

export const closemodal = () => ({
  type: CLOSE_MODAL,
});
