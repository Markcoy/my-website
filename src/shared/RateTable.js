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
      <div className="mx-auto max-w-full sm:max-w-xl shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-gray-700 border border-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-3 border font-bold text-center border-gray-800 text-gray-100 bg-gray-900">
                Skills
              </th>
              <th className="px-4 py-3 border font-bold text-center border-gray-800 text-gray-100 bg-gray-900">
                Mastery
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="hover:bg-gray-600">
                <td className="py-3 border-b text-center px-6 sm:px-10 border-gray-400 text-gray-200">
                  {skill.name}
                </td>
                <td className="px-4 py-3 border-b border-gray-400">
                  <div className="flex flex-col items-center sm:items-center sm:flex-row sm:justify-center">
                    <p className="text-gray-400 text-center mb-2 sm:mb-0 px-8 sm:mr-4">
                      {`${skill.mastery}/10`}
                    </p>
                    <div className="flex p-4 flex-wrap justify-center text-2xl">
                      {generateStars(skill.mastery)}
                    </div>
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
