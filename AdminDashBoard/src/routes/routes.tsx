import { lazy } from 'react';
import { Paths } from '../utils/type';

import AuthLayout from '../components/layout/AuthLayout';
const Register = lazy(() => import('../views/register/Register'))
const Login = lazy(() => import('../views/login/Login'))
const ForgotPassword = lazy(() => import('../views/forgotPassword/ForgotPassword'))

import MainLayout from '../components/layout/MainLayout';
const Settings = lazy(() => import("../views/settings/Settings"));
const Discover = lazy(() => import("../views/discover/Discover"));
const Dashboard = lazy(() => import("../views/dashboard/Dashboard"));
const Manage = lazy(() => import("../views/manage/Manage"));

const ErrorPage = lazy(() => import("../components/layout/ErrorPage"));

const routes = [
  // Auth
  {
    paths: Paths.Auth,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.Auth + Paths.Register,
        element: <Register />,
      },
      {
        path: Paths.Auth + Paths.Login,
        element: <Login />,
      },
      {
        path: Paths.Auth + Paths.ForgotPassword,
        element: <ForgotPassword />,
      },
    ]
  },

  // Logged in
  {
    path: Paths.Dashboard,
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: Paths.Dashboard,
        element: <Dashboard />,
      },
      {
        path: Paths.Discover,
        element: <Discover />,
      },
      {
        path: Paths.Manage,
        element: <Manage />,
      },
      {
        path: Paths.Settings,
        element: <Settings />,
      },
    ]
  }
]

export default routes