import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Make sure to set the app element for accessibility

const Certificate = ({ imageSrc, title, pdfSrc }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div
        className="max-w-md mx-auto mt-6 bg-gray-700 shadow-lg rounded-md overflow-hidden cursor-pointer"
        onClick={openModal}
      >
        <img
          className="p-2 rounded-xl w-full h-48 object-cover transition duration-200 hover:scale-105"
          src={imageSrc}
          alt={title}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-200">{title}</h2>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate PDF"
        className="flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center"
      >
        <div className="bg-gray-900 p-4 rounded-lg w-[1100px] h-[550px] overflow-auto">
          <embed
            src={pdfSrc}
            type="application/pdf"
            className="w-full h-[515px]"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Certificate;
