import React, { useState, type PropsWithChildren } from "react";
import { AccordianItemContext, useAccordian } from "../store/accordian-context";

const AccordianContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-fit bg-white rounded-2xl border px-3 py-2">
      {children}
    </div>
  );
};

const AccordianItem: React.FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AccordianItemContext.Provider
      value={{ open: isOpen, toggle: handleToggle }}
    >
      <div>{children}</div>
    </AccordianItemContext.Provider>
  );
};

const AccordianTitle: React.FC<PropsWithChildren> = ({ children }) => {
  const { open, toggle } = useAccordian();
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold">{children}</h2>
      <div onClick={toggle}>{open ? "-" : "+"}</div>
    </div>
  );
};

const AccordianDescription: React.FC<PropsWithChildren> = ({ children }) => {
  const { open } = useAccordian();
  return (
    <p
      className={`mt-1 overflow-hidden transition-[max-height,opacity] ease-in-out duration-700 ${open ? "max-h-200 opacity-100" : "max-h-0 opacity-0"}`}
    >
      {children}
    </p>
  );
};

export {
  AccordianContainer,
  AccordianItem,
  AccordianTitle,
  AccordianDescription,
};
