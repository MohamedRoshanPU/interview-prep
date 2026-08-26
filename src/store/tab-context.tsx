import { createContext, useContext } from "react";

interface Tab {
  tab: string | number;
  onTabChange: (value: string | number) => void;
}

export const TabContext = createContext<Tab | null>(null);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("Use tab components inside Tab!");
  }
  return context;
};
