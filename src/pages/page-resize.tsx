import React, { useEffect, useRef, useState } from "react";

const Resize: React.FC = () => {
  const [panelWidth, setPanelWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isDragging) return;
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      const clampedPercentage = Math.min(Math.max(percentage, 10), 90);
      setPanelWidth(clampedPercentage);
    };
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="w-100 h-100 rounded-2xl border flex overflow-hidden select-none"
        ref={containerRef}
      >
        <div
          style={{ width: `${panelWidth}%` }}
          className="h-full bg-blue-300"
        ></div>
        <div
          className="w-1 h-full bg-black cursor-col-resize shrink-0"
          onMouseDown={() => setIsDragging(true)}
        ></div>
        <div className="flex-1 bg-red-300"></div>
      </div>
    </div>
  );
};

export default Resize;
