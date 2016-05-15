import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import Api from '../util/api';

export function * fetchUser(action) {
  try {
    const user = yield call(Api.fetchUser, action.user);
    yield put(actions.fetchUserSuccess(user));
  } catch (e) {
    yield put(actions.fetchUserFailed(e.message));
  }
}

export function * sagas() {
  yield* takeEvery(actions.fetchUser, fetchUser);
}
