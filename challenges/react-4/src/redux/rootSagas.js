/* Effects */
import { all } from "redux-saga/effects";
import { charactersSagas } from "./characters/sagas";

export default function* rootSagas() {
  // here we initialize all the sagas from different files
  yield all([...charactersSagas]);
}
