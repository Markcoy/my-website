import React from "react";

const Expe = () => {
  return (
    <div className="py-8 ">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[800px] mx-auto">
        <p className="sm:text-xl text-md ">Hacktiv Colab Inc.</p>
        <p className="text-gray-400 text-sm  font-medium mb-3 italic">
          (February 2024 - May 2024)
        </p>

        <p className="text-gray-400 text-md">
          Intern - Front-end Web Developer
        </p>

        <p className="text-gray-500 text-sm">
          In Hacktiv I am trained to enhance my skills in web development. I am
          assigned to be part of the Frontend Team that manages to design and
          test a web app.{" "}
        </p>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto "></div>
      <div className="mt-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[800px] mx-auto">
        <p className="sm:text-xl text-md ">Westhill International School</p>
        <p className="text-gray-400 text-sm  font-medium mb-3 italic">
          (July 2018 - August 2018)
        </p>

        <p className="text-gray-400 text-md">Intern - Library Assistant</p>

        <p className="text-gray-500 text-sm">
          Helped troubleshoot technical issues with library equipment and
          software, such as printers and internet connectivity. Manage to
          connect and make LAN cabling like straight-through and cross-over
          connection
        </p>
      </div>
    </div>
  );
};

export default Expe;
