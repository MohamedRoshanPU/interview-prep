import { createContext, useContext } from "react";

interface ModalContextProps {
  open: boolean;
  onClose: () => void;
  openModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Components should used inside the Modal Component!");
  }
  return context;
};
