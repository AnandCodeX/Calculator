import React, { useState } from "react";

function App1() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    switch (value) {
      case "=":
        try {
          setInput(eval(input).toString()); // Evaluate the expression
        } catch {
          setInput("Error"); // Handle invalid expressions
        }
        break;
      case "C":
        setInput(""); // Clear the input
        break;
      default:
        setInput((prev) => prev + value); // Append the button value to the input
    }
  };

  const buttons = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["C", "0", "=", "/"],
  ];

  return (
    <div className="flex justify-center mt-[100px]">
      <div className="border-[4px] border-black h-[500px] w-[500px]">
        <h1 className="flex justify-center">Calculator</h1>
        <hr className="border-[2px] border-black" />
        <div className="flex justify-center">
          <input
            type="text"
            value={input}
            readOnly
            className="border-[3px] mt-1 border-black w-[400px] h-[50px]"
          />
        </div>
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center mt-2">
            {row.map((btnValue) => (
              <button
                key={btnValue}
                onClick={() => handleClick(btnValue)}
                className="border-[3px] border-black w-[100px] h-[50px]"
              >
                {btnValue}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App1;
