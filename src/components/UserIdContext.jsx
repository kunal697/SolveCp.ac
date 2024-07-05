import React, { createContext, useState, useEffect } from 'react';

const UserIdContext = createContext();
const LOCAL_STORAGE_KEY = 'UserId';

const UserIdProvider = ({ children }) => {
  const [UserId, setUserId] = useState(() => {
    const storedUserId = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedUserId ? storedUserId : '';
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, UserId);
  }, [UserId]);

  return (
    <UserIdContext.Provider value={{ UserId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};

export { UserIdProvider };
export default UserIdContext;
