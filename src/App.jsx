import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-screen h-screen duration-200 bg-gray-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center fixed w-full bottom-12">
        <button
          className="btn outline-none px-8 py-1 mx-4 rounded-full bg-white shadow-lg"
          onClick={() => {
            setColor("white");
          }}
        >
          White
        </button>

        <button
          className="btn px-8 py-1 mx-4 rounded-full   bg-gray-600 text-white shadow-lg"
          onClick={() => {
            setColor("black");
          }}
        >
          Black
        </button>

        <button
          className="btn px-8 py-1 mx-4 rounded-full bg-green-400 shadow-lime-500"
          onClick={() => {
            setColor("#4ade80");
          }}
        >
          Green
        </button>
        <button
          className="btn px-10 py-1 mx-4  text-white rounded-full shadow-lg bg-blue-950"
          onClick={() => {
            setColor("#06023b");
          }}
        >
          Navy
        </button>
      </div>
    </div>
  );
};

export default App;
