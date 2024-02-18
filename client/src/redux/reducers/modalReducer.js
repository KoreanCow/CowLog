import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const initialState = {
  isOpend: false,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpend: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpend: false,
      }
    default:
      return state;
  }
}
export default modalReducer;