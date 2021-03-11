import { all } from '@redux-saga/core/effects';
import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import user from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import { userSaga } from './user';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga()]);
}

export default rootReducer;
