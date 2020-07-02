import {FETCH_GITHUB_DATA} from '../action/types';

export default function fetchGithubReducer(state = [], action) {
  switch (action.type) {
    case FETCH_GITHUB_DATA:
      return action.data;
    default:
      return state;
  }
}
