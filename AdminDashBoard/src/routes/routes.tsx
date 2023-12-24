import { lazy } from 'react';
import Paths from '../utils/constants/paths';
import Register from '../views/register/components/Register';
import Login from '../views/login/components/Login';
import MainLayout from '../components/MainLayout';

const Settings = lazy(() => import("../views/settings/components/Settings"));
const Discover = lazy(() => import("../views/discover/components/Discover"));
const Dashboard = lazy(() => import("../views/dashboard/components/Dashboard"));
const ErrorPage = lazy(() => import("../components/ErrorPage"));

const routes = [
  {
    path: Paths.Register,
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.Login,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.Default,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    //action: isAuthenticatedAction,

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
        path: Paths.Settings,
        element: <Settings />,
      },
    ]
  }
]

export default routes