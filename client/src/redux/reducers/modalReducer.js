import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const initialState = {
  isOpened: false,
  postId: null,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpened: true,
        postId: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpened: false,
        postId: null,
      }
    default:
      return state;
  }
}
export default modalReducer;