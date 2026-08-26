import React, { useState } from "react";

const MultiInput: React.FC = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState<string[]>([]);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key.toLowerCase() === "enter") {
      if (!value) return;
      setValues((prev) => [...prev, value]);
      setValue("");
    }
    if (e.key.toLowerCase() === "backspace") {
      if (values.length === 0 || value) return;
      const copied = [...values];
      let updatedValues = copied.filter(
        (_value, idx: number) => idx !== values.length - 1,
      );
      setValues(updatedValues);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleDelete = (idx: number) => {
    setValues((prev) => prev.filter((_item, index: number) => index !== idx));
  };

  return (
    <div className="w-full h-full">
      <div className="w-full py-20 flex items-center justify-center">
        <div className="flex items-center border rounded-2xl w-xl px-2 py-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {values.map((value, idx) => {
              return (
                <div
                  key={`${value}_${idx}`}
                  className="flex items-center gap-1 w-fit bg-gray-200 text-black rounded-full border border-gray-600 text-xs px-2 py-1"
                >
                  <div>{value}</div>
                  <div onClick={() => handleDelete(idx)}>X</div>
                </div>
              );
            })}
          </div>
          <input
            type="text"
            className="grow focus:outline-0 px-2"
            onKeyDown={handleEnter}
            onChange={handleChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiInput;
