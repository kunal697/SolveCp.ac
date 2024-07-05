// Problem.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import ProblemHeader from './ProblemHeader';

function Problem() {
  return (
    <div>
      <ProblemHeader />
      <Outlet />
    </div>
  );
}

export default Problem;
