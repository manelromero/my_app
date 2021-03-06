import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import React from "react";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.renderWithState = (component, { initialState, store } = {}) => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const mockedStore = mockStore(initialState);

  return {
    ...render(<Provider store={store || mockedStore}>{component}</Provider>),
    store
  };
};

afterEach(cleanup);
