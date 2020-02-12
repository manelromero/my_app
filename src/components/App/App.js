import React from "react";
import { Provider } from "react-redux";
import store from "../../store";
import Left from "../Left";
import Picture from "../Picture";
import "./App.css";

function App() {
  return (
    <Provider store={store.configure()}>
      <div className="App">
        <Left />
        <Picture />
      </div>
    </Provider>
  );
}

export default App;
