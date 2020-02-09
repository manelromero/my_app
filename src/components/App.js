import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import Right from "./Right";
import FirstLevel from "./FirstLevel";
import SecondLevel from "./SecondLevel";
import ThirdLevel from "./ThirdLevel";
import FourthLevel from "./FourthLevel";
import "./App.css";

function App() {
  return (
    <Provider store={store.configure()}>
      <div className="App">
        <Left />
        <Right />
      </div>
    </Provider>
  );
}

function Left() {
  return (
    <div className="Left">
      <FirstLevel />
      <SecondLevel />
      <ThirdLevel />
      <FourthLevel />
    </div>
  );
}

export default App;
