import { SELECT_WISH, DESELECT_WISH } from '../actions/wishControlActions';

const initialState = {
  isWish: false,
}

const wishControlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_WISH:
      return {
        ...state,
        isWish: true,
      }
    case DESELECT_WISH:
      return {
        ...state,
        isWish: false,
      }
    default:
      return state;
  }
}

export default wishControlReducer;