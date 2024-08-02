import React from "react";
import aboutImg from "../assets/about4.jpeg";
const About = () => {
  return (
    <div className="py-10 text-white bg-[@232325] h-auto flex items-center justify-center">
      <div className="flex sm:flex-row flex-col-reverse items-center md-gap-6 gap-12 px-10 max-w-6xl mx auto ">
        <div>
          <div className="w-[400px] h-full">
            <img
              src={aboutImg}
              alt=""
              className="object-cover bg-gray-700 rounded-xl h-[300px] filter grayscale brightness-50"
            />
          </div>
        </div>

        <div>
          <div className="p-2">
            <div className="text-gray-300 my-3 mx-auto ">
              <h3 className="text-4xl font-semibold mb-5">
                About <span> Me</span>
              </h3>
              <p className="text-justify leading-7 w-11/12 mx-auto ">
                "Hello! Welcome to my Page. I am Mark Christian C. Velasco, 23
                years old, from Dasmariñas City, Cavite. I graduated Bs
                Information technology specialized in Networking at De La Salle
                University - Dasmariñas. My hobbies are cooking, doing home work
                outs, and playing mobile games. I believe in the saying that "If
                you change your thinking, it will change your life", thus it is
                like a domino effect that affects our whole aspects in life."
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-7 mb-5">
            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md?:text-4xl text-2xl font-semibold text-white">
                4<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">Projects</span>
              </p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md?:text-4xl text-2xl font-semibold text-white">
                0<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">
                  Years of experience
                </span>
              </p>
            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md?:text-4xl text-2xl font-semibold text-white">
                2<span>+</span>
              </h3>
              <p>
                <span className="md:text-base text-xs">On the Job Traning</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
