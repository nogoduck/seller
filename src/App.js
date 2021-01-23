import "./App.css";
import React, { useState } from "react";

function App() {
  const main = "duck.info";
  let [title, moditymain] = useState("Welcome😊");
  let contents = "No information yet";
  let [good, moditygood] = useState(0);
  return (
    <div className="App">
      <div className="navbar">{main}</div>
      <div className="list">
        <button
          id="angrybutton"
          onClick={() => {
            if (title === "Welcome😊") {
              moditymain("soften me😁");
            } else if (title === "soften me😁") {
              moditymain("press me gently😭");
            } else if (title === "press me gently😭") {
              moditymain("Don`t click me🤬");
              moditygood(0);
            } else if (title === "Don`t click me🤬") {
              moditymain("Welcome😊");
            }
          }}
        >
          😀
        </button>
        <h3>{title}</h3>
        <p
          onClick={() => {
            moditygood(good + 1);
          }}
        >
          {contents}
          <span id="good"> ❤ </span>
          {good}
        </p>
      </div>
      <hr />
    </div>
  );
}

export default App;
