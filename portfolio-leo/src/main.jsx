import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Works from './Pages/Works';
import Blogs from './Pages/Blogs';
import NotFound from './Pages/NotFound';

import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-me',
    element: <AboutMe />,
  },
  {
    path: '/works',
    element: <Works />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

root.render(
  /*   <React.StrictMode> */
    <RouterProvider router={router} />
  /*   </React.StrictMode> */
);
