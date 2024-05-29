import React from "react";
import { AiFillPhone } from "react-icons/ai";

const PhoneButton = () => {
  // Function to copy the phone number to clipboard
  const copyPhoneNumber = () => {
    const phoneNumber = "09276082670"; // Your phone number to copy

    // Create a temporary textarea element
    const tempElement = document.createElement("textarea");
    tempElement.value = phoneNumber;
    document.body.appendChild(tempElement);

    // Select the text in the textarea and copy it to the clipboard
    tempElement.select();
    document.execCommand("copy");

    // Remove the temporary element from the DOM
    document.body.removeChild(tempElement);

    // Optionally, you can notify the user that the phone number was copied
    alert("Phone number copied to clipboard!");
  };

  return (
    <div>
      {/* Wrap the AiFillPhone icon in a button */}
      <button
        onClick={copyPhoneNumber}
        title="Copy phone number"
        className="text-4xl md:text-5xl jump"
      >
        <AiFillPhone />
      </button>
    </div>
  );
};

export default PhoneButton;
