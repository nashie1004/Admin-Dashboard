import { lazy } from 'react';
import { Paths } from './constants';

// Layout
import AuthLayout from '../components/layout/AuthLayout';
import MainLayout from '../components/layout/MainLayout';
import MainSubLayout from '../components/layout/MainSubLayout';

// Views
const Register = lazy(() => import('../views/Register'))
const Login = lazy(() => import('../views/Login'))
const ForgotPassword = lazy(() => import('../views/ForgotPassword'))
const Settings = lazy(() => import("../views/Settings"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const Post = lazy(() => import("../views/Post"));
const Community = lazy(() => import("../views/Community"));
const ErrorPage = lazy(() => import("../views/Error"));

// Others
const DashboardSidebar = lazy(() => import("../components/layout/DashboardSidebar"));
const CommunitySidebar = lazy(() => import("../components/layout/CommunitySidebar"));
const PostSidebar = lazy(() => import("../components/layout/PostSidebar"));

// React router
export const routes = [
  // Auth
  {
    paths: Paths.Auth,
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Paths.Register,
        element: <Register />,
      },
      {
        path: Paths.Login,
        element: <Login />,
      },
      {
        path: Paths.ForgotPassword,
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
        element: <MainSubLayout Main={<Dashboard />} Sidebar={<DashboardSidebar />} /> 
      },
      {
        path: Paths.Community,
        element: <MainSubLayout Main={<Community />} Sidebar={<CommunitySidebar />} /> 
      },
      {
        path: Paths.Post,
        element: <MainSubLayout Main={<Post />} Sidebar={<PostSidebar />} /> 
      },
      {
        path: Paths.Settings,
        element: <MainSubLayout Main={<Settings />} Sidebar={<DashboardSidebar />} /> 
      },
    ]
  }
]