import { createContext, useContext } from "react";

interface AccordianContext {
  open: boolean;
  toggle: () => void;
}

export const AccordianItemContext = createContext<AccordianContext | null>(
  null,
);

export const useAccordian = () => {
  const context = useContext(AccordianItemContext);

  if (!context) {
    throw new Error(
      "Accordian components must be used inside AccordianItem component!",
    );
  }
  return context;
};
