// src/components/Arena/ArenaWrapper.jsx
import React from 'react';
import { DataProvider } from './Contestdata'; // Adjust the import path as needed
import Arena from './Arena'; // Adjust the import path as needed

const ArenaWrapper = () => {
  return (
    <DataProvider>
      <Arena />
    </DataProvider>
  );
};

export default ArenaWrapper;
