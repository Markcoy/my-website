import React from "react";
import profilepic from "../assets/macoy.png";
import pic1 from "../assets/p1.png";
import pic2 from "../assets/p2.png";
import pic3 from "../assets/p4.png";
import pic4 from "../assets/p3.png";
import ImageViewer from "./modal/ImageViewer";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMessage,
} from "react-icons/ai";
import PhoneButton from "../shared/PhoneButton";
import About from "./About";
import { MdEmail } from "react-icons/md";
import EmailButton from "../shared/EmailButton";
const Hero = () => {
  return (
    <div className="mt-10">
      <div className="  my-7 sm:my-0 max-w-[1200px] h-auto mx-auto flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className="flex-col my-auto mx-auto md:mx-0">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-300">
            Hi! I am Macoy Velasco
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "UI/UX Designer",
                1000,
                "Web Designer",
                1000,
                "Network Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex justify-start items-center">
            <p className="md:text-5xl sm:text-4xl text-2xl font-bold text-gray-500">
              DLSU - D Fresh Graduate
            </p>
          </div>
          <div className="text-4xl md:text-5xl flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-14 my-7 text-purple-600">
            <a
              href="https://www.linkedin.com/in/mark-christian-velasco-3138a0250/"
              title="Visit my LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="jump"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/Markcoy"
              title="Visit my GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="jump"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.instagram.com/mccv__06/"
              title="Visit my Instagram profile"
              target="_blank"
              rel="noopener noreferrer"
              className="jump"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100080161555850"
              title="Visit my Facebook profile"
              target="_blank"
              rel="noopener noreferrer"
              className="jump"
            >
              <AiFillFacebook />
            </a>
            <EmailButton />
            <PhoneButton />
          </div>

          <div className="relative inline-flex group my-3  ">
            <div className="absolute transition-all duration-1000  opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <a
              href="https://drive.google.com/uc?export=download&id=1Ft-DdfBPl9S74rOdg7TIPfc04EIBLAlB
              



              "
              title="Download CV"
              role="button"
              class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color rounded-xl focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto ">
          <img
            className="lg:w-[400px] md:w-[200px] sm:w-[100px] ml-10 mx-auto h-auto"
            src={profilepic}
            alt="Profile pic"
          />
        </div>
      </div>
      {/* For Pics */}
      <div className="flex justify-center mt-2 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-1 lg:gap-8 ">
          {/* Image 1 */}

          <div
            className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg 
                 "
          >
            <ImageViewer src={pic1} alt="Pic 1 image" />
          </div>

          {/* Image 2 */}

          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <ImageViewer src={pic2} alt="Pic 2 image" />
          </div>

          {/* Image 3 */}
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <ImageViewer src={pic3} alt="Pic 3 image" />
          </div>

          {/* Image 3 */}
          <div className="group h-48 w-48 md:h-64 md:w-64 overflow-hidden rounded-lg shadow-lg ">
            <ImageViewer src={pic4} alt="Pic 3 image" />
          </div>
        </div>
        {/* End of Pics*/}
      </div>

      <About />
    </div>
  );
};

export default Hero;
