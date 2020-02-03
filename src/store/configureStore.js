import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const store = {
  get() {
    return this.store;
  },

  configure() {
    let middlewares = [thunk.withExtraArgument()];
    const initialState = {};

    const logger = createLogger({ collapsed: true });
    middlewares = [...middlewares, logger];

    this.store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    );

    return this.store;
  }
};

export default store;
