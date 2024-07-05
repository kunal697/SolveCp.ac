import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Problemlist from './Problemlist.json';
import SubmissionContex from './SubmissionContex';

function TagsProblems() {
  const {Subdata} = useContext(SubmissionContex);
  const { topic } = useParams();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(topic);

  return (
    <div className="lg:mx-32">
      <h1 className='text-2xl p-5 font-bold'>{topic}</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Rating</th>

          </tr>
        </thead>
        <tbody>
          {Problemlist.filter(problem => problem.tags.includes(topic)).map((problem, index) => (
            
            <tr key={index} className={`border-t border-gray-200 ${Subdata.includes(`${problem.contestId}-${problem.index}`) ? 'bg-green-400':''}`}>
              <td className="border border-gray-300 px-4 py-2">
              <a href={`https://codeforces.com/contest/${problem.contestId}/problem/${problem.index}`}>
                {problem.name}
                </a>
                </td>
              <td className="border border-gray-300 px-4 py-2">{problem.rating}</td>
             
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TagsProblems;

