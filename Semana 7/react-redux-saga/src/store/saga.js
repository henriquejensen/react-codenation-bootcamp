import {
  all,
  /*takeEvery,*/ takeLatest,
  put,
  select,
  call /*delay*/
} from "redux-saga/effects";

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + " " + (length + 1) + " !!!!!");
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  try {
    const todos = yield select(state => state.todos);
    const text = yield call(apiGet, action.payload.text, todos.length);
    yield put({
      type: "ADD_TODO",
      payload: { text }
    });
  } catch (error) {
    yield put({
      type: "ERROR"
    });
  }
}

export default function* root() {
  // yield all([takeEvery("ASYNC_ADD_TODO", asyncAddTodo)]);
  yield all([takeLatest("ASYNC_ADD_TODO", asyncAddTodo)]);
}

/* function* generator() {
  yield ...

  yield ...
} */
