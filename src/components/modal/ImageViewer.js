import React, { useState } from "react";
import Modal from "react-modal";

// Set app element for accessibility reasons
Modal.setAppElement("#root");

function ImageViewer({ src, alt = "", description = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Image component */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-100 w-full object-cover object-center transition duration-200 group-hover:scale-110 cursor-pointer"
        onClick={openModal} // Open modal when the image is clicked
      />

      {/* Modal component */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            minHeight: "100px",
            minWidth: "400px",
            maxWidth: "60%",
            maxHeight: "86%",
          },
        }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="close-button text-xl" // Use the CSS class for styles
        >
          x
        </button>

        {/* Display the larger image */}
        <div>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition duration-200 group-hover:scale-110"
          />
        </div>

        {/* Description section */}
        <div className="description mt-4">
          <p style={{ maxWidth: "500px" }}>{description}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ImageViewer;
