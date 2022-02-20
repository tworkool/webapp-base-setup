import { createStore } from "redux";
import { rootInit, rootReducer } from "./reducers/root";

/* const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; */

const store = createStore(rootReducer, rootInit);

export default store;

/* sagaMiddleware.run(rootSaga); */
