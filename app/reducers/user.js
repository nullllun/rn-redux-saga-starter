import {
  USER_FETCH_REQUESTED,
  USER_FETCH_SUCCEDED,
  USER_FETCH_FAILED,
} from '../actions/user';

export default function userState(state = {}, action) {
  switch (action.type) {
    case USER_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };
    case USER_FETCH_SUCCEDED:
      return {
        ...state,
        isFetching: false,
        user: action.userData,
      };
    case USER_FETCH_FAILED:
      return {
        ...state,
        isFetching: false,
        message: action.message,
      };
    default:
      return state;
  }
}
