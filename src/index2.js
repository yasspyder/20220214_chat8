import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function FunctionApp() {
  return <h1>Привет, мир!</h1>;
}


const ComponentWithoutJSX = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello ComponentWithoutJSX component")
  );
}

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello class component</h1>
      </div>
    );
  }
}

function FunctionComponent() {
  return (
    <div>
      <h1>Hello function component</h1>
    </div>
  );
}

const myName = "Александр";


ReactDOM.render(
  <React.StrictMode>
    <FunctionApp />
    <hr />
    <App name={myName} />
    <hr />
    <ClassComponent />
    <hr />
    <FunctionComponent />
    <hr />
    <ComponentWithoutJSX />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
