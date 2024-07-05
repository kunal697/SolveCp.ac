import React from 'react';
import { Link } from 'react-router-dom';

const levels = [
  { level: 'Bronze IV', color: 'text-gray-800', rating: 800 },
  { level: 'Bronze III', color: 'text-gray-800', rating: 900 },
  { level: 'Bronze II', color: 'text-gray-800', rating: 1000 },
  { level: 'Bronze I', color: 'text-gray-800', rating: 1100 },
  { level: 'Silver V', color: 'text-blue-500', rating: 1200 },
  { level: 'Silver IV', color: 'text-blue-500', rating: 1300 },
  { level: 'Silver III', color: 'text-blue-500', rating: 1400 },
  { level: 'Silver II', color: 'text-blue-500', rating: 1500 },
  { level: 'Silver I', color: 'text-blue-500', rating: 1600 },
  { level: 'Gold V', color: 'text-yellow-800', rating: 1700 },
  { level: 'Gold IV', color: 'text-yellow-800', rating: 1800 },
  { level: 'Gold III', color: 'text-yellow-800', rating: 1900 },
  { level: 'Gold II', color: 'text-yellow-800', rating: 2000 },
  { level: 'Gold I', color: 'text-yellow-800', rating: 2100 },
  { level: 'Platinum V', color: 'text-green-500', rating: 2200 },
  { level: 'Platinum IV', color: 'text-green-500', rating: 2300 },
  { level: 'Platinum III', color: 'text-green-500', rating: 2400 },
  { level: 'Platinum II', color: 'text-green-500', rating: 2500 },
  { level: 'Platinum I', color: 'text-green-500', rating: 2600 },
  { level: 'Diamond V', color: 'text-purple-500', rating: 2700 },
  { level: 'Diamond IV', color: 'text-purple-500', rating: 2800 },
  { level: 'Diamond III', color: 'text-purple-500', rating: 2900 },
  { level: 'Diamond II', color: 'text-purple-500', rating: 3000 },
  { level: 'Diamond I', color: 'text-purple-500', rating: 3100 },
  { level: 'Ruby V', color: 'text-red-500', rating: 3200 },
  { level: 'Ruby IV', color: 'text-red-500', rating: 3300 },
  { level: 'Ruby III', color: 'text-red-500', rating: 3400 },
  { level: 'Ruby II', color: 'text-red-500', rating: 3500 },
  { level: 'Ruby I', color: 'text-red-500', rating: 3600 },
];

function Level() {
  return (
    <>
      <div className='bg-gray-300 mb-3 h-[4cm] w-screen justify-center lg:pl-40 pl-5 items-start flex flex-col'>
        <h1 className='text-3xl font-sans font-bold '>Level</h1>
        <br />
        <h1>Train with challenges suited for your skill</h1>
      </div>
      <div className='m-5 flex items-center justify-center  lg:mx-60'>
        <table className='w-full bg-gray-300 border-2 border-black'>

        
          <thead>
            <tr>
              <th className='py-2 px-4 border-2 shadow-inner '>Level</th>
              {/* <th className='py-2 px-4 border border-black'>Count</th> */}
            </tr>
          </thead>
          <tbody>
            {levels.map((item, index) => (
              <tr key={index}>
                <td className='py-2 px-4 border-2'>
                  <Link to={`/problems/level/${item.rating}`} className={item.color}>
                    <img src="https://www.svgrepo.com/show/533035/bookmark.svg" alt="icon" className="h-4 w-4 mr-2 inline-block" />
                    {item.level}
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

export default Level;
