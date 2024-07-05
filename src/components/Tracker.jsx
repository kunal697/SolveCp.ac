import React, { useState, useEffect, useContext } from 'react';
import UserIdContext from './UserIdContext';
import { Link } from 'react-router-dom';
import { TailSpin } from 'react-loading-icons';

function Tracker() {
  const { UserId } = useContext(UserIdContext);
  const [probdata, setProbdata] = useState([]);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contests, setContests] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        const result = await response.json();

        if (result.status === 'OK') {
          const sortedContests = result.result
            .filter(contest => contest.phase === 'FINISHED')
            .sort((a, b) => b.startTimeSeconds - a.startTimeSeconds);

          setContests(sortedContests);
        } else {
          setError(new Error('Error fetching contest data'));
        }
      } catch (err) {
        setError(err);
      }
    };

    const fetchData = async () => {
      try {
        const [contestResponse, problemResponse] = await Promise.all([
          fetch('https://codeforces.com/api/contest.list').then(res => res.json()),
          fetch('https://codeforces.com/api/problemset.problems').then(res => res.json())
        ]);

        const sortedContests = contestResponse.result
          .filter(contest => contest.phase === 'FINISHED')
          .sort((a, b) => b.startTimeSeconds - a.startTimeSeconds);

        const groupedProblems = sortedContests.map(contest => {
          const contestId = contest.id;
          const contestProblems = problemResponse.result.problems
            .filter(problem => problem.contestId === contestId)
            .sort((a, b) => a.index.localeCompare(b.index));

          return { contestId, contestProblems };
        });

        setProbdata(groupedProblems);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserSubmissions = async () => {
      try {
        if (UserId !== '') {
          const response = await fetch(`https://codeforces.com/api/user.status?handle=${UserId}`);
          const result = await response.json();
          if (result.status === 'OK') {
            const solved = result.result
              .filter(submission => submission.verdict === 'OK')
              .map(submission => `${submission.problem.contestId}-${submission.problem.index}`);
            setSolvedProblems(solved);
          }
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchContests();
    fetchData();
    fetchUserSubmissions();
  }, [UserId]);

  const getContestName = (contestId) => {
    const contest = contests.find(c => c.id === contestId);
    return contest ? contest.name : 'Unknown Contest';
  };

  const filteredProblems = probdata.filter(({ contestId }) => {
    if (selectedFilter === 'all') {
      return true;
    }
    const contest = contests.find(c => c.id === contestId);
    if (!contest) return false;
    if (selectedFilter === 'div1') {
      return contest.name.includes('Div. 1');
    }
    if (selectedFilter === 'div2') {
      return contest.name.includes('Div. 2');
    }
    if (selectedFilter === 'div3') {
      return contest.name.includes('Div. 3');
    }
    if (selectedFilter === 'div4') {
      return contest.name.includes('Div. 4');
    }
    return false;
  });

  if (loading) return <div className="flex justify-center items-center h-screen"><TailSpin stroke="black" fill="black" strokeOpacity={1} speed={1} /></div>;

  if (error) return <div className="flex justify-center items-center h-screen">Codeforces API error. Please try again later.</div>;

  return (
    <div className="mt-10 lg:mx-32 m-3">
      <div className="flex justify-center mb-4 border-2 border-gray-300">
        <button className={`mx-2 lg:p-2 ${selectedFilter === 'all' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedFilter('all')}>
          All Contests
        </button>
        <button className={`mx-2 lg:p-2 ${selectedFilter === 'div1' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedFilter('div1')}>
          Div. 1
        </button>
        <button className={`mx-2 lg:p-2 ${selectedFilter === 'div2' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedFilter('div2')}>
          Div. 2
        </button>
        <button className={`mx-2 p-2 ${selectedFilter === 'div3' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedFilter('div3')}>
          Div. 3
        </button>
        <button className={`mx-2 p-2 ${selectedFilter === 'div4' ? 'bg-gray-600' : ''}`} onClick={() => setSelectedFilter('div4')}>
          Div. 4
        </button>
      </div>

      <table className="min-w-full bg-white border border-gray-100">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-400">Contest Name</th>
            <th className="py-2 px-4 border border-gray-400">Problems</th>
          </tr>
        </thead>
        <tbody>
          {filteredProblems.map(({ contestId, contestProblems }) => (
            <tr key={contestId}>
              <td className="py-2 px-4 border rounded-sm border-gray-400">{getContestName(contestId)}</td>
              <td className="py-2 px-4 border border-gray-400">
                <div className="flex flex-wrap">
                  {contestProblems.map((problem, idx) => (
                    <Link
                      to={`https://codeforces.com/contest/${contestId}/problem/${problem.index}`}
                      key={idx}
                      className={`p-2 m-1 border-2 ${solvedProblems.includes(`${problem.contestId}-${problem.index}`) ? 'bg-green-400 border-gray-400' : 'border-gray-400'}`}
                    >
                      <div className="truncate max-w-[150px] min-w-[100px]">
                        {problem.index}. {problem.name}
                      </div>
                      <div className="text-sm text-gray-600">({problem.rating || 'N/A'})</div>
                    </Link>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tracker;
