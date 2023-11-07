import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import CreateUserPage from '../pages/CreateUser';
import LoginUserPage from '../pages/LoginUser';
import Explore from '../pages/Explorar';
import Profile from '../pages/Perfil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/perfil',
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: '/explorar',
    element: <Explore />,
    errorElement: <ErrorPage />
  },
  {
    path: '/create',
    element: <CreateUserPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginUserPage />,
    errorElement: <ErrorPage />
  }
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
