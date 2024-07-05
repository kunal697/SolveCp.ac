import React from 'react';
import { Link } from 'react-router-dom';

function Tags() {
  const topics = [
    "implementation",
    "brute force",
    "greedy",
    "data structures",
    "strings",
    "math",
    "sortings",
    "dp",
    "number theory",
    "graphs",
    "dfs and similar",
    "dsu",
    "trees",
    "binary search",
    "two pointers",
    "combinatorics",
    "geometry",
    "hashing",
    "probabilities",
    "shortest paths",
    "graph matchings",
    "flows",
    "fft",
    "string suffix structures",
    "expression parsing",
    "bitmasks",
    "chinese remainder theorem",
    "meet-in-the-middle",
    "constructive algorithms",
    "interactive",
    "ternary search",
    "schedules"
  ];

  return (
    <>
      <div className='bg-gray-300 mb-3 h-[4cm] w-screen justify-center lg:pl-40 pl-5 items-start flex flex-col'>
        <h1 className='text-3xl font-sans font-bold'>Tags</h1>
        <br/>
        <h1>Explore and conquer various topics</h1>
      </div>
      <div className='m-5 flex items-center justify-center lg:mx-60 '>
        <table className='w-full bg-gray-300 border-2 border-black'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-2 shadow-inner '>Tags</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-2'>
                  <Link to={`/problems/tags/${item}`} className="flex items-center">
                    <img src="https://www.svgrepo.com/show/533456/tags.svg" alt="icon" className="h-4 w-4 mr-2 inline-block" />
                    {item}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tags;
