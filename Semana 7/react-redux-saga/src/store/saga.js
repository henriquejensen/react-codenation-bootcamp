import {
  all,
  /*takeEvery,*/ takeLatest,
  put,
  call /*delay*/
} from "redux-saga/effects";

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: "Notification 1" },
        { id: 2, text: "Notification 2" },
        { id: 3, text: "Notification 3" },
        { id: 4, text: "Notification 4" }
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);
    yield put({
      type: "SUCCESS_TODO_LIST",
      payload: { data: response }
    });
  } catch (error) {
    yield put({
      type: "FAILED_TODO_LIST"
    });
  }
}

export default function* root() {
  yield all([takeLatest("REQUEST_TODO_LIST", getTodoList)]);
}
