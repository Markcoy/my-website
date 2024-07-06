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
      <div className="mx-auto max-w-4xl shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 border text-left text-gray-900 bg-gray-100">
                Skills
              </th>
              <th className="px-4 py-3 border text-left text-gray-900 bg-gray-100">
                Mastery
              </th>
              <th className="px-4 py-3 border text-left text-gray-900 bg-gray-100">
                Rate
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b text-gray-800">
                  {skill.name}
                </td>
                <td className="px-4 py-3 border-b">
                  <div className="flex items-center">
                    {generateStars(skill.mastery)}
                  </div>
                </td>
                <td className="px-4 py-3 border-b text-gray-800">{`${skill.mastery}/10`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RateTable;
