import React from 'react';
import { Link } from 'react-router-dom';
import homebg from '../assets/homebg.jpg'

function Home() {
  return (
    <>
    <div 
      className=' font-sans flex flex-col  text-white w-full h-80  justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <h1 className='lg:ml-32 ml-5 text-4xl font-bold'>
      Community Powered Guide for<br/>
      Programming Challenges
      </h1>
      <br/>
      <h1 className='text-lg ml-36 font-bold text-white'>A Guide For Competitive Programing</h1>
    </div>
    <div className='lg:ml-32 m-6 font-sans mt-10'>
      <div className='mb-20'>
        <h1 className='text-2xl font-bold mb-5'>Challenges Suited for Your Skill</h1>
        <p className='font-semibold'>
          Bronze for beginners, Silver for experienced, Gold for experts, and beyond — <br />
          Train with challenges suited for your skill, and get to know your accomplishments.
        </p>
        <div className='flex flex-row m-5'>
          <Link to="/problems/level" className='mr-10 font-bold text-green-600 text-lg flex items-center'>
            Level
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="ml-2 text-green-600">
              <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
            </svg>
          </Link>
          <Link to="/problems/tag" className='mr-10 font-bold text-green-600 text-lg flex items-center'>
            Tags
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="ml-2 text-green-600">
              <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
            </svg>
          </Link>
        </div>
      </div>
      <div className='mb-20'>
        <h1 className='text-2xl font-bold mb-5'>Try Our Curations</h1>
        <p className='font-semibold'>
          New to programming challenges? Got lost in your training plan?<br />
          Level and Class problems will help you get on track.
        </p>
        <div className='flex flex-row m-5'>
          <Link to="/problems/class" className='mr-10 font-bold text-green-600 text-lg flex items-center'>
            Level
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="ml-2 text-green-600">
              <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
            </svg>
          </Link>
          <Link to="/problems/tag" className='mr-10 font-bold text-green-600 text-lg flex items-center'>
            Tags
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="ml-2 text-green-600">
              <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
            </svg>
          </Link>
        </div>
      </div>
      <div className='mb-20'>
        <h1 className='text-2xl font-bold mb-5'>By the Arena</h1>
        <p className='font-semibold'>
          Get updated by contest!<br/>
          List of upcoming contest on codeforcs 
        </p>
        <div className='flex flex-row m-5'>
          <Link to="/arena" className='mr-10 font-bold text-green-600 text-lg flex items-center'>
            Areana
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="ml-2 text-green-600">
              <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
            </svg>
          </Link>
        </div>
        <Link to="" className='bg-violet-500 mt-10 h-14 mr-5 rounded-lg flex items-center p-5 font-semibold hover:bg-violet-400'>
          Join our discord server!
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="ml-2 text-black">
            <path d="M11.293 4.707L17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/>
          </svg>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;
