import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const store = {
  get() {
    return this.store;
  },

  configure() {
    const logger = createLogger({ collapsed: true });
    const initialState = {
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      showImage5: false,
    };

    this.store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, logger)
    );

    return this.store;
  }
};

export default store;
