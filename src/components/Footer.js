import React from "react";
import { FaFacebook, FaGithubSquare, FaInstagram } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiGooglesheets, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800] border-t  border-t-gray-500 text-center">
      <p className="my-5 text-gray-500">
        Velasco Portfolio <br /> &copy; 2024. All rights reserved.
      </p>

      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <FaGithubSquare />
        <SiTailwindcss />
        <GrReactjs />
        <SiGooglesheets />
      </div>
    </div>
  );
};

export default Footer;
