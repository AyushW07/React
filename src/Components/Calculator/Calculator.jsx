import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const handleAddition = () => {
    const sum = Number(number1) + Number(number2);
    setResult(`Result ${sum}`);
  };

  const handleSubtraction = () => {
    const diff = Number(number1) - Number(number2);
    setResult(`Result ${diff}`);
  };

  const handleMultiplication = () => {
    const product = Number(number1) * Number(number2);
    setResult(`Result ${product}`);
  };

  const handleDivision = () => {
    const quotient = Number(number1) / Number(number2);
    setResult(`Result ${quotient}`);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        placeholder="Enter Number"
      />
      <pre></pre>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        placeholder="Enter Number"
      />
      <pre></pre>
      <div className="buttons">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <h2 className="result">{result}</h2>
    </div>
  );
}

export default Calculator;
