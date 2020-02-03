import React from "react";
import { Provider } from "react-redux";
import store from '../../store/configureStore';
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
  const handleClick = () => {
    console.log("aaa");
  };

  return (
    <div className="Left" onClick={handleClick}>
      <FirstLevel />
    </div>
  );
}

function FirstLevel() {
  return (
    <div className="FirstLevel">
      <SecondLevel />
    </div>
  );
}

function SecondLevel() {
  return (
    <div className="SecondLevel">
      <ThirdLevel />
    </div>
  );
}

function ThirdLevel() {
  return (
    <div className="ThirdLevel">
      <FourthLevel />
    </div>
  );
}

function FourthLevel() {
  return <div className="FourthLevel"></div>;
}

function Right() {
  return (
    <div className="Right">
      <Image />
    </div>
  );
}

function Image({ level = 1 }) {
  return <div className={`Image-${level}`}></div>;
}

export default App;
