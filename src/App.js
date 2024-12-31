
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

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
        <div className="flex justify-center mt-2">
          <button
            onClick={() => handleClick("1")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            1
          </button>
          <button
            onClick={() => handleClick("2")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            2
          </button>
          <button
            onClick={() => handleClick("3")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            3
          </button>
          <button
            onClick={() => handleClick("+")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            +
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={() => handleClick("4")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            4
          </button>
          <button
            onClick={() => handleClick("5")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            5
          </button>
          <button
            onClick={() => handleClick("6")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            6
          </button>
          <button
            onClick={() => handleClick("-")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            -
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={() => handleClick("7")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            7
          </button>
          <button
            onClick={() => handleClick("8")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            8
          </button>
          <button
            onClick={() => handleClick("9")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            9
          </button>
          <button
            onClick={() => handleClick("*")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            x
          </button>
        </div>
        <div className="flex justify-center mt-2">
          <button
            onClick={() => handleClick("C")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            C
          </button>
          <button
            onClick={() => handleClick("0")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            0
          </button>
          <button
            onClick={() => handleClick("=")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            =
          </button>
          <button
            onClick={() => handleClick("/")}
            className="border-[3px] border-black w-[100px] h-[50px]"
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
