import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer'
import modalReducer from './reducers/modalReducer';
import wishControlReducer from './reducers/wishControlReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  wishcontrol: wishControlReducer,
})

const store = createStore(
  rootReducer
)

export default store;