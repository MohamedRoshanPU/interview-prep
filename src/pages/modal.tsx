import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalTitle,
  ModalTrigger,
} from "../components/modal";

const Modal: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ModalContainer>
        <ModalTrigger>
          <button className="bg-blue-600 rounded-full border text-white px-2 py-1">
            Open Modal
          </button>
        </ModalTrigger>
        <ModalContent>
          <ModalTitle>Delete file?</ModalTitle>
          <ModalDescription>
            Are you sure you want to delete this file?
          </ModalDescription>
          <ModalFooter>
            <button className="bg-blue-600 rounded-full border text-white px-2 py-1">
              Proceed
            </button>
          </ModalFooter>
        </ModalContent>
      </ModalContainer>
    </div>
  );
};

export default Modal;
