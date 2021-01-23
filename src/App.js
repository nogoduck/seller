import "./App.css";
import React, { useState } from "react";

function MainTitle(props) {
  // return <div>{main}</div>;
}
function App() {
  const main = "duck.info";
  let [title, moditymain] = useState("Welcome😊");
  let contents = "No information yet";
  let [good, moditygood] = useState(0);
  return (
    <div className="App">
      {/* <MainTitle></MainTitle> */}
      <div className="navbar">{main}</div>
      <div className="list">
        {/* <button
          onClick={() => {
            changeModal(!modal);
            console.log(!modal);
          }}
        >
          btn
        </button>
        {modal === true ? <Modal /> : null} */}

        {/* change title button  */}
        <button
          id="angrybutton"
          onClick={() => {
            if (title === "Welcome😊") {
              moditymain("soften me😁");
            } else if (title === "soften me😁") {
              moditymain("press gentle please😭");
            } else if (title === "press gentle please😭") {
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
        {/* add like func */}
        <p
          onClick={() => {
            moditygood(good + 1);
          }}
        >
          {contents}
          <span id="good"> ❤ </span>
          {good}
        </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
