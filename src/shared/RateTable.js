import React from "react";

const generateStars = (mastery) => {
  const totalStars = 10;
  const filledStars = Math.round(mastery);
  const emptyStars = totalStars - filledStars;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <span key={i} className="text-yellow-500">
        &#9733;
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={i + filledStars} className="text-gray-300">
        &#9733;
      </span>
    );
  }
  return stars;
};

const RateTable = ({ skills }) => {
  return (
    <div className="overflow-x-auto p-6">
      <div className="mx-auto max-w-xl  shadow-lg rounded-lg  overflow-hidden">
        <table className="min-w-full  bg-gray-700 border border-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 border font-bold text-center border-gray-800   text-gray-100 bg-gray-900">
                Skills
              </th>
              <th className="px-4 py-3 border font-bold text-lcenter border-gray-800 text-gray-100 bg-gray-900">
                Mastery
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="px-4 py-3 border-b text-center border-gray-400 text-gray-200">
                  {skill.name}
                </td>
                <td className="px-4 py-3 border-b border-gray-400">
                  <div className="grid items-center">
                    <p className="text-gray-400 text-center">{`${skill.mastery}/10`}</p>
                    <p className="text-2xl text-center ">
                      {generateStars(skill.mastery)}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RateTable;
