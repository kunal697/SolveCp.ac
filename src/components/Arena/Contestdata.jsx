import React, { createContext, useState, useEffect } from 'react';

const Contestdata = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://codeforces.com/api/contest.list');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Contestdata.Provider value={{ data, loading, error}}>
      {children}
    </Contestdata.Provider>
  );

};

export { DataProvider };
export default Contestdata;