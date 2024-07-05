import React, { useContext } from 'react';
import Contestdata from './Contestdata';
import battle from '../../assets/battle.webp';
import battle1 from '../../assets/battle1.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingIcons from 'react-loading-icons'
import { TailSpin,BallTriangle,Audio } from 'react-loading-icons';




const Arena = () => {
  const { data, loading, error } = useContext(Contestdata);

  if (loading) {
    return <div className="flex justify-center items-center h-screen ">< TailSpin stroke="#06042E" fill='#06042E' strokeOpacity={1} speed={1} /></div>;
  }

  if (error) {
    return toast.error('API Error')
  }
  
  const filteredAndReversedContests = data.result
    .filter(contest => contest.phase === 'BEFORE')
    .reverse();


  return (
    
    <div className='flex flex-col items-start justify-center min-h-screen bg-gray-100'>
      {/* <img src={batt} className='mt-2' /> */}
      <div className='bg-gray-200 mb-3 h-[4cm] w-screen justify-center lg:pl-40 pl-5 items-start flex  flex-col'>
        <h1 className='text-3xl font-sans font-bold'>Arena</h1>
        <br/>
        <h1>Upcoming Codeforces Contests</h1>
    </div>    
    <div className='flex items-center justify-center flex-grow w-full max-w-screen-lg overflow-auto'>
  <ul className='lg:w-[15cm]'>
    {filteredAndReversedContests.map(contest => (
      <li key={contest.id} className='lg:pl-10 p-3 shadow-inner border-2 border-gray-300 hover:shadow-2xl m-4 rounded-xl'>
        <div className='flex items-center flex-wrap'>
          <img src={battle1} className='lg:w-20 w-14 inline-block align-middle mr-4 mt-2' />
          <a
            href={`https://codeforces.com/contests/${contest.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className='inline-block mt-2 md:mt-0 md:ml-4 md:align-middle'
          >
            <span className='font-bold block'>{contest.name}</span>
            <span className='font-semibold block'>Start Time:</span>
            <span className='font-bold block'>{new Date(contest.startTimeSeconds * 1000).toLocaleString()}</span>
            <span className='font-semibold block'>Duration:</span>
            <span className='font-bold block'>{(contest.durationSeconds)/3600} hours</span>
          </a>
        </div>
      </li>
    ))}
  </ul>
</div>

      <ToastContainer />
    </div>
  );
};

export default Arena;
