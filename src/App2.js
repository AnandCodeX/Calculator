import React, { useReducer } from "react";

const initialState = { input: "" };

function reducer(state, action) {
  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, input: state.input + action.payload };
    case "EVALUATE":
      try {
        return { ...state, input: eval(state.input).toString() }; // Evaluate expression
      } catch {
        return { ...state, input: "Error" };
      }
    case "CLEAR":
      return { ...state, input: "" };
    default:
      return state;
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const buttons = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    ["C", "0", "=", "/"],
  ];

  const handleClick = (value) => {
    if (value === "=") dispatch({ type: "EVALUATE" });
    else if (value === "C") dispatch({ type: "CLEAR" });
    else dispatch({ type: "ADD_INPUT", payload: value });
  };

  return (
    <div className="flex justify-center mt-[100px]">
      <div className="border-[4px] border-black h-[500px] w-[500px]">
        <h1 className="flex justify-center">Calculator</h1>
        <hr className="border-[2px] border-black" />
        <div className="flex justify-center">
          <input
            type="text"
            value={state.input}
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

export default Calculator;
