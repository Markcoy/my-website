import React from "react";
import { Parallax } from "react-parallax";
import para from "../assets/bg_1.png";
import skillsImage from "../assets/skills.png";
import cplus from "../assets/C++.png";
import mongodb from "../assets/mongodb.png";
import powerbi from "../assets/powerbi.png";
import arduino from "../assets/arduino.png";
import python from "../assets/python.png";
import canva from "../assets/canva.png";
import office from "../assets/office.png";
import java from "../assets/java.png";
import reactImage from "../assets/react.png";
import front from "../assets/frontend.png";
import cisco from "../assets/cisco.png";
import nodejs from "../assets/node.png";
import CardFlip from "../shared/CardFlip.js";
import RateTable from "../shared/RateTable.js";
import useIntersectionObserver from "../shared/useIntersectionObserver";

const Skills = () => {
  const skills = [
    {
      name: "C++",
      mastery: 7,
      image: cplus,
      description:
        "I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker.",
    },
    {
      name: "MongoDB",
      mastery: 8,
      image: mongodb,
      description:
        "MongoDB is a unstructured database that I also utilized in making our capstone project. This database was also a topic when I was in third-year college, that is why I am familiar with it.",
    },
    {
      name: "Java",
      mastery: 6,
      image: java,
      description:
        "NodeJS was taught when I was in second-year college, it is fun because you will know how front-end and back-end works.",
    },
    {
      name: "NodeJS",
      mastery: 5,
      image: nodejs,
      description:
        "I am knowledgeable to use C++ programming language because I used it via Arduino IDE for the device of our thesis, which is a student event tracker.",
    },
    {
      name: "Front-end Development",
      mastery: 5,
      image: front,
      description:
        "I sharpen my knowledge about front-end development when I started to do an internship with Hacktiv Colab Inc., at first I was skeptic to take this challenge since I was a networking student, but with enough perseverance and passion to work, I successfully do tasks like making a website design and etc.",
    },
    {
      name: "ReactJS",
      mastery: 5,
      image: reactImage,
      description:
        "When I was a first-year student, I tried to explore the ReactJS. It is fun because you only need components to build a website. Unlike the usual HTML formats, ReactJS is more powerful and easy to use.",
    },
    {
      name: "Cisco Networking",
      mastery: 5,
      image: cisco,
      description:
        "I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network.",
    },
    {
      name: "Power BI",
      mastery: 5,
      image: powerbi,
      description:
        "I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network.",
    },
    {
      name: "Arduino",
      mastery: 5,
      image: arduino,
      description:
        "I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network.",
    },
    {
      name: "Python",
      mastery: 5,
      image: python,
      description:
        "I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network.",
    },
    {
      name: "Canva",
      mastery: 5,
      image: canva,
      description:
        "I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network.",
    },
    {
      name: "Microsoft Office",
      mastery: 5,
      image: office,
      description:
        "I am knowledgeable to use Cisco routers and other devices for networking. I am also good in computing IP addresses and have knowledge in making VLANS, and providing robust security for a network.",
    },
  ];

  const addElement = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className="py-6 max-w-[1200px] mx-auto h-auto flex justify-center">
      <div className="card-form bg-neutral-800 px-2 py-5 rounded-lg border border-gray-900">
        <Parallax bgImage={para} strength={500} className="rounded-xl">
          <div className="flex flex-col-reverse items-center px-6 md:px-10 max-w-6xl mx-auto h-[400px]">
            <div className="flex justify-center text-balance  md:justify-start items-center gap-6 md:flex-row flex-col-reverse">
              <div className="bg-violet-900 shadow-xl font-semibold bg-opacity-50 rounded-lg px-2 py-2 text-5xl jump text-gray-300 text-center mb-[150px] ">
                Skills and Mastery
              </div>
            </div>
          </div>
        </Parallax>

        <div className="p-6">
          <span className="text-3xl font-bold ml-4 mb-4">Skills</span>
        </div>

        <div className="px-8 mt-6 grid md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative inline-flex group skill-card"
              ref={addElement}
            >
              <div className="absolute transition-all duration-1000 opacity-10 -inset-px bg-gradient-to-r from-[#993fff] via-[#02d4f0] to-[#dddddd] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
              <CardFlip
                image={skill.image}
                title={skill.name}
                description={skill.description}
              />
            </div>
          ))}
        </div>

        <div className="p-6 skill-card" ref={addElement}>
          <span className="text-3xl font-bold ml-4 mb-4">Mastery</span>
          <div className="mt-6 flex flex-wrap justify-center">
            <RateTable skills={skills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
