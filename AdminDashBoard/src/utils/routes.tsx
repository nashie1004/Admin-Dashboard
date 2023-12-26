import { lazy } from 'react';
import { Paths } from './constants';

// Sidebar
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';

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

// React router
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

// Sidebar links
const sideBarRoutes: SideBarRoutes[] = [
  {
    routePath: Paths.Dashboard,
    routeName: "Dashboard",
    routeElement: <DashboardIcon />
  },
  {
    routePath: Paths.Discover,
    routeName: "Discover",
    routeElement: <ShoppingCartIcon />
  },
  {
    routePath: Paths.Manage,
    routeName: "Manage",
    routeElement: <BarChartIcon />
  },
  {
    routePath: Paths.Settings,
    routeName: "Settings",
    routeElement: <LayersIcon />
  },
  {
    routePath: Paths.Auth + Paths.Login,
    routeName: "Logout",
    routeElement: <PeopleIcon />
  },
]

export {sideBarRoutes, routes}