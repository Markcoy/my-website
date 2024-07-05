import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const EmailButton = () => {
  // Function to copy the phone number to clipboard
  const copyEmail = () => {
    const email = "macoy.velasco12@gmail.com"; // Your phone email to copy

    // Create a temporary textarea element
    const tempElement = document.createElement("textarea");
    tempElement.value = email;
    document.body.appendChild(tempElement);

    // Select the text in the textarea and copy it to the clipboard
    tempElement.select();
    document.execCommand("copy");

    // Remove the temporary element from the DOM
    document.body.removeChild(tempElement);

    // Optionally, you can notify the user that the phone number was copied
    alert("Email copied to clipboard!");
  };

  return (
    <div>
      {/* Wrap the AiFillPhone icon in a button */}
      <button
        onClick={copyEmail}
        title="Copy phone number"
        className="text-4xl md:text-5xl jump"
      >
        <MdEmail />
      </button>
    </div>
  );
};

export default EmailButton;
