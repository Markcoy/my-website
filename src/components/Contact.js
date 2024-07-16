import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsEnvelope } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        Toastify({
          text: "Form submitted successfully!",
          backgroundColor: "linear-gradient(to right, #100114, #b018d9)",
          className: "info",
        }).showToast();
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      Toastify({
        text: error.message,
        backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
        className: "info",
      }).showToast();
    }
  };

  return (
    <div className="flex justify-center my-auto  h-full sm:h-[70vh] items-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 m-auto  bg-gray-800 rounded-xl flex flex-col justify-starts">
            <h1 className="text-2xl sm:text-4xl text-white">
              Contact <span>me</span>
            </h1>
            <p className=" text-md font-medium text-gray-400 mt-2">
              Let's connect on LinkedIn <br /> or send me an Email
            </p>
            <div className=" flex flex-wrap justify-start gap-2 sm:gap-4  ">
              <div className="mt-4  rounded-md hover:opacity-70 shadow-sm shadow-black">
                <a
                  href="https://www.linkedin.com/in/mark-christian-velasco-3138a0250/"
                  title="Visit my LinkedIn profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white "
                >
                  <AiFillLinkedin size={30} />
                </a>
              </div>
              <div className=" flex items-center pt-3 text-gray-300 font-medium">
                <p className="text-sm sm:text-md">Mark Christian C. Velasco</p>
              </div>
            </div>
            <div className=" flex flex-wrap justify-start gap-2 sm:gap-4  ">
              <div className="mt-4  rounded-md  shadow-sm shadow-black">
                <BsEnvelope className="text-white" size={30} />
              </div>
              <div className=" flex items-center pt-3 text-gray-300 font-medium">
                <p className="text-sm sm:text-md">macoy.velasco12@gmail.com</p>
              </div>
            </div>
            <div className=" flex flex-wrap justify-start gap-2 sm:gap-4  ">
              <div className="mt-4  rounded-md  hover:opacity-70 shadow-sm shadow-black">
                <a
                  href="https://www.facebook.com/profile.php?id=100080161555850"
                  title="Visit my Facebook profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookMessenger className="text-white" size={30} />
                </a>
              </div>
              <div className=" flex items-center pt-3 text-gray-300 font-medium">
                <p className="text-sm sm:text-md">m.me/mcvelasco06</p>
              </div>
            </div>
          </div>
          <form
            action="https://script.google.com/macros/s/AKfycbyCsAbpfZ02rJMqMmcJLDJMmBIJNIFk_61gmCPE9TM3GZwppwMWp9o0fCTrzol-kfBFmw/exec"
            method="post"
            className="p-6 flex flex-col justify-center max-w-[700px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
            <div className="flex flex-col mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                required
              />
            </div>
            <div className="flex flex-col mt-2">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-100 mt-2 p-3 h-[150px] rounded-lg bg-gray-800 border border-gray-700 text-white"
                style={{ resize: "none" }}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3 hover:opacity-80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
