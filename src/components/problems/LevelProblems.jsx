import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Problemlist from './Problemlist.json';
import SubmissionContex from './SubmissionContex';

function LevelProblems() {
  const {Subdata} = useContext(SubmissionContex);
  const { rating } = useParams();
  

  return (
    <div className="p-4 lg:mx-60">
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>

          </tr>
        </thead>
        <tbody>
          {Problemlist.filter(problem => problem.rating === parseInt(rating))
          .map((problem, index) => (
            
            <tr key={index} className={`border-t border-gray-200 ${Subdata.includes(`${problem.contestId}-${problem.index}`) ? 'bg-green-400':''}`}>
              <td className="border border-gray-300 px-4 py-2">
              <a href={`https://codeforces.com/contest/${problem.contestId}/problem/${problem.index}`}>
                {problem.name}
                </a>
                </td>
              <td className={`border border-gray-300 px-4 py-2 `}>{problem.rating}</td>
             
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LevelProblems;
