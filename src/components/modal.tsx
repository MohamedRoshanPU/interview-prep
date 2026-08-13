import React, { useEffect, useState, type PropsWithChildren } from "react";
import { ModalContext, useModalContext } from "../store/modal-context";
import { createPortal } from "react-dom";

const ModalContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const [open, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div role="dialog" id="modal-dialog">
      <ModalContext.Provider value={{ open, onClose, openModal }}>
        {children}
      </ModalContext.Provider>
    </div>
  );
};

const ModalTrigger: React.FC<PropsWithChildren> = ({ children }) => {
  const { openModal } = useModalContext();
  return <div onClick={openModal}>{children}</div>;
};

const ModalContent: React.FC<PropsWithChildren> = ({ children }) => {
  const { open, onClose } = useModalContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const Modal: React.FC = () => {
    return (
      open && (
        <div className="absolute w-screen h-screen bg-black/20 inset-0 flex items-center justify-center">
          <div className="bg-white w-xl max-h-100 rounded-2xl overflow-auto shrink-0 p-5">
            {children}
          </div>
        </div>
      )
    );
  };
  return createPortal(<Modal />, document.body);
};

const ModalTitle: React.FC<PropsWithChildren> = ({ children }) => {
  const { onClose } = useModalContext();

  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-xl">{children}</h1>
      <div onClick={onClose}>X</div>
    </div>
  );
};

const ModalDescription: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-sm italic mt-1">{children}</p>;
};

const ModalFooter: React.FC<PropsWithChildren> = ({ children }) => {
  const { onClose } = useModalContext();

  return (
    <div className="flex items-center gap-5 mt-5">
      <button
        onClick={onClose}
        className="bg-red-500 text-white rounded-full px-2 py-1"
      >
        Cancel
      </button>
      {children}
    </div>
  );
};

export {
  ModalContainer,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalFooter,
};
