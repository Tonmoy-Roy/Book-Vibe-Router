import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Banner from './components/Banner/Banner.jsx';
import Bookdetails from './components/Bookdetails/Bookdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>, // kono page jodi na pay E
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'books/:bookId',
        element: <Bookdetails></Bookdetails>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
