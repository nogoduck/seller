import "./App.css";
import React, { useState } from "react";

function App() {
  const main = "duck.info";
  let [title, moditymain] = useState("angry");
  let [contents, moditycont] = useState("No information yet");
  return (
    <div className="App">
      <div className="navbar">{main}</div>
      <div className="list">
        <button
          id="angrybutton"
          onClick={() => {
            if (title === "angry") {
              moditymain("Don`t click me");
            } else if (title === "Don`t click me") {
              moditymain("angry");
            }
          }}
        >
          😀
        </button>
        <h3>{title}</h3>
        <p>{contents}</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
