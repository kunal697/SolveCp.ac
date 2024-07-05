import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './components/Home.jsx';
import ProblemWrap from './components/Problems/ProblemWrap.jsx';
import Problem from './components/Problems/Problem.jsx';
import Arena from './components/Arena/Arena.jsx';
import ArenaWrapper from './components/Arena/ArenaWrapper.jsx';
import Level from './components/Problems/Level.jsx';
import Tags from './components/Problems/Tags.jsx';
import Class from './components/Problems/Class.jsx';
import Tracker from './components/Tracker.jsx';
import './index.css';
import { DataProvider } from './components/Arena/Contestdata.jsx';
import LevelProblems from './components/Problems/LevelProblems.jsx';
import TagsProblems from './components/Problems/TagsProblems.jsx';
import { SubmissionProvider } from './components/Problems/SubmissionContex.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'tracker',
        element:  <DataProvider>  <Tracker /> </DataProvider>
       ,
      },
      {
        path: 'problems',
        element: <SubmissionProvider> <Problem /> </SubmissionProvider> ,
        children: [
          {
            path: 'class',
            element: <Class />,
          },
          {
            path: 'tag',
            element: <Tags />,
          },
          {
            path: 'level',
            element: <Level />,
          },
          {path:':rating',
            element: <LevelProblems />
          },
          {path:'level/:rating',
            element: <LevelProblems />
          },
          {path:'tags/:topic',
            element: <TagsProblems />
          }
        ],
      },
      {
        path: 'arena',
        element: <ArenaWrapper />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
