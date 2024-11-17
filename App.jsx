import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="containerGlobal">
        <div className="container">
          {!counter ? (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
              className="hide"
            >
              {" "}
              -{" "}
            </button>
          ) : (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              {" "}
              -{" "}
            </button>
          )}

          <p className="counter">{counter}</p>
          {counter === 10 ? (
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
              className="hide"
            >
              {" "}
              +{" "}
            </button>
          ) : (
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              {" "}
              +{" "}
            </button>
          )}
        </div>
        <button
          className="resetButton"
          onClick={() => {
            setCounter(0);
          }}
        >
          {" "}
          Reset{" "}
        </button>
      </div>
    </>
  );
}

export default App;
