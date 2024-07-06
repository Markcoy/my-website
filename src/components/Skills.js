import React from "react";
import skills from "../assets/skills.gif";
import cplus from "../assets/C++.png";
import mongodb from "../assets/mongodb.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import front from "../assets/frontend.png";
import cisco from "../assets/cisco.png";
import nodejs from "../assets/node.png";
import CardDescL from "../shared/CardDescL";
import CardDescR from "../shared/CardDescR.js";
import CardFlip from "../shared/CardFlip.js";

const Skills = () => {
  return (
    <div className="py-10 text-white bg-[@232325] h-auto flex justify-center">
      <div className="card-form bg-neutral-800 px-5 py-5 rounded-lg border border-gray-900">
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
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <CardFlip
            image={cplus}
            title="C++"
            description="I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker."
          />
          <CardFlip
            image={mongodb}
            title="MongoDB"
            description="MongoDB is a unstructured database that I also utilized in making our capstone project. This database was also a topic when I was in third-year college, that is why I am familiar with it."
          />
          <CardFlip
            image={java}
            title="Java"
            description="This is the first coding language that I learned. It is complex because it is a intermediate coding language, but when you get used to it, the logic and solving's would be easy."
          />
          <CardFlip
            image={cplus}
            title="C++"
            description="I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker."
          />
          <CardFlip
            image={cplus}
            title="C++"
            description="I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker."
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
