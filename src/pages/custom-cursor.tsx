import React, { useEffect, useRef, useState } from "react";

const Cursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  console.log(position);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mouseMoveListner = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setPosition((prev) => ({
        ...prev,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }));
    };
    container.addEventListener("mousemove", mouseMoveListner);
    return () => {
      container.removeEventListener("mousemove", mouseMoveListner);
    };
  }, []);
  return (
    <div
      className="w-full h-full flex items-center justify-center relative overflow-hidden transition-all ease-in-out cursor-none  "
      ref={containerRef}
    >
      <div
        className="w-5 h-5 rounded-full border border-red-600 absolute"
        style={{ left: position.x, top: position.y }}
      ></div>
      <h1>Custom Cursor</h1>
    </div>
  );
};

export default Cursor;
