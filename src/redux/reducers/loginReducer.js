import {LOGIN} from '../action/types';

export default (login = '', action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return login;
  }
};
