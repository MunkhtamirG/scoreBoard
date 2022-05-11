import React, { useState } from "react";
import "../styles/counter.css";

export default function Counter(props) {
  const [score, setScore] = useState(props.score);
  function incrementHandler() {
    setScore(score + 1);
  }
  function decrementHandler() {
    setScore(score - 1);
  }
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={decrementHandler}>
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={incrementHandler}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}
