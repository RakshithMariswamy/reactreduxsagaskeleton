import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import history from "../utils/History";
import rootReducer from "../reducerindex";
import rootWatcher from "../sagaIndex";

const sagaMiddleware = createSagaMiddleware();
const routersMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routersMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootWatcher);
export default store;
