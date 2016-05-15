// Action Types
export const USER_FETCH_REQUESTED = 'USER_FETCH_REQUESTED';
export const USER_FETCH_SUCCEDED = 'USER_FETCH_SUCCEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';

// Action Creators
export function fetchUser(user) {
  return {
    type: USER_FETCH_REQUESTED,
    user,
  };
}

export function fetchUserFailed(message) {
  return {
    type: USER_FETCH_FAILED,
    message,
  };
}

export function fetchUserSuccess(userData) {
  return {
    type: USER_FETCH_SUCCEDED,
    userData,
  };
}
