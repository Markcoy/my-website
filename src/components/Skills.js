import React from "react";
import skills from "../assets/skills.gif";
import cplus from "../assets/C++.png";
import mongodb from "../assets/mongodb.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import front from "../assets/frontend.png";
import cisco from "../assets/cisco.png";
import nodejs from "../assets/node.png";
import CardFlip from "../shared/CardFlip.js";
import RateTable from "../shared/RateTable.js";

const Skills = () => {
  const skills = [
    { name: "C++", mastery: 7 },
    { name: "JavaScript", mastery: 8 },
    { name: "React", mastery: 6 },
    { name: "CSSdhfgfhdhfdfhdfhdf", mastery: 5 },
  ];
  return (
    <div className="py-6 max-w-[1200px] mx-auto h-auto flex justify-center">
      <div className="card-form bg-neutral-800 px-2 py-5 rounded-lg border border-gray-900">
        <div className="flex sm:flex-row flex-col-reverse items-center md-gap-6 gap-12 px-10 max-w-6xl mx auto ">
          <div>
            <div className="w-[400px] h-full">
              <img
                src={skills}
                alt=""
                className="object-cover bg-transparent rounded-xl h-[300px] pl-10"
              />
            </div>
          </div>

          <div>
            <div className="p-auto">
              <div className="text-gray-300 my-3">
                <h3 className="text-4xl font-semibold mb-5">
                  My <span> Skills</span>
                </h3>
                <p className="text-justify leading-7 w-11/12 mx auto">
                  These are the my skills or lists of technologies I am
                  knowlegeable.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <span className="text-3xl font-bold ml-4 mb-4">Skills</span>
        </div>
        <div className="mt-6 flex flex-wrap gap-9 justify-center">
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={cplus}
              title="C++"
              description="I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker."
            />
          </div>
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={mongodb}
              title="MongoDB"
              description="MongoDB is a unstructured database that I also utilized in making our capstone project. This database was also a topic when I was in third-year college, that is why I am familiar with it."
            />
          </div>
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={java}
              title="Java"
              description="NodeJS was taught when I was in second-year college, it is fun because you will know how front-end and back-end works."
            />
          </div>
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={nodejs}
              title="NodeJS"
              description="I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker."
            />
          </div>
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={front}
              title="Front-end Development"
              description="I sharpen my knowledge about front-end development when I started to do an internship with Hacktiv Colab Inc., at first I was skeptic to take this challenge since I was a networking student, but with enough perseverance and passion to work, I successfully do tasks like making a website design and etc."
            />
          </div>
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={react}
              title="ReactJS"
              description="When I was a first-year student, I tried to explore the ReactJS. It is fun because you only need components to build a website. Unlike the usual HTML formats, ReactJS is more powerful and easy to use."
            />
          </div>
          <div className="relative inline-flex group   ">
            <div className="absolute transition-all duration-1000  opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 "></div>
            <CardFlip
              image={cisco}
              title="Cisco Networking"
              description="I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network."
            />
          </div>
        </div>
        <div className="p-6 ">
          <span className="text-3xl font-bold ml-4 mb-4">Mastery</span>
          <div className="mt-6  flex flex-wrap justify-center">
            <RateTable skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
