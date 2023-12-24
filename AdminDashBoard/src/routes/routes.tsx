import ErrorPage from "../components/errorPage/ErrorPage";
import Root from "../components/root/Root";
import Paths from "../utils/constants/paths";
import Dashboard from "../views/dashboard/components/Dashboard";
import Discover from "../views/discover/components/Discover";
import Login from "../views/login/components/Login";
import Register from "../views/register/components/Register";
import Settings from "../views/settings/components/Settings";

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
    element: <Root />,
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