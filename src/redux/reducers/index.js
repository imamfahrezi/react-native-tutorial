import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

// we call state in here
export default combineReducers({
  login: loginReducer,
});
