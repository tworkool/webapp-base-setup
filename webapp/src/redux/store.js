import { createStore, applyMiddleware } from "redux";
import { rootInit, rootReducer } from "./reducers/root";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/root";

const sagaMiddleware = createSagaMiddleware();
/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  */

const store = createStore(
  rootReducer,
  rootInit,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
