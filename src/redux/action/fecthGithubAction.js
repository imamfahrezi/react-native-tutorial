import {FETCH_GITHUB_DATA} from './types';
import axios from 'axios';

const baseUrl = 'https://api.github.com/users/imamfahrezi';

export const fecthData = (data) => {
  return {
    type: FETCH_GITHUB_DATA,
    data,
  };
};

export const fecthGithubAction = () => {
  return (dispatch) => {
    return axios
      .get(baseUrl)
      .then((res) => {
        dispatch(fecthData(res.data));
        console.log(res);
      })
      .catch((error) => {
        throw error;
      });
  };
};
