import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import fetchGithubReducer from './fecthGithubReducer';

// we call state in here
export default combineReducers({
  login: loginReducer,
  githubSaya: fetchGithubReducer,
});
