import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_REPOS,
  GET_USER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state, // return current state supposedly
        users: action.payload,
        loading: false
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload, // comes github APi
        loading: false
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [], // clear users array right? set empty array !
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
