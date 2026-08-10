import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce: React.FC = () => {
  const [input, setInput] = useState("");
  const { debouncedValue } = useDebounce(input);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((_prev) => e.target.value);
  };
  return (
    <div className="w-full h-full flex items-start justify-center py-20">
      <div className="flex flex-col gap-5">
        <input
          className="w-md h-10 border rounded-2xl focus:right-1 focus:ring-blue-600 px-2"
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <p>
            <span>Input: </span>
            <span className="text-xl">{input}</span>
          </p>
          <p>
            <span>Debounced Input:</span>
            <span className="text-xl">{debouncedValue}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Debounce;
