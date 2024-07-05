import React, { createContext, useContext, useEffect, useState } from 'react';
import UserIdContext from '../UserIdContext';

const SubmissionContex = createContext();

const SubmissionProvider = ({ children }) => {
  const { UserId } = useContext(UserIdContext);
  const [Subdata, setSubdata] = useState([]);

  useEffect(() => {
    const fetchUserSubmissions = async () => {
      try {
        if (UserId) {
          const response = await fetch(`https://codeforces.com/api/user.status?handle=${UserId}`);
          const result = await response.json();
          if (result.status === 'OK') {
            const solved = result.result
              .filter(submission => submission.verdict === 'OK')
              .map(submission => `${submission.problem.contestId}-${submission.problem.index}`);
            setSubdata(solved);
          }
        }
      } catch (err) {
        console.log('UserApi error', err);
      }
    };

    fetchUserSubmissions();
  }, [UserId]);

  return (
    <SubmissionContex.Provider value={{ Subdata, setSubdata }}>
      {children}
    </SubmissionContex.Provider>
  );
};

export { SubmissionProvider };
export default SubmissionContex;
