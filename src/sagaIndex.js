// index.js
import { all } from "redux-saga/effects";
// import { all /*fork*/ } from "redux-saga/effects";
// import { FindBySize } from "./FindBySize/saga";

export default function* rootSaga() {
  yield all([
    // fork(shoppingViewBinTracking)
  ]);
}
