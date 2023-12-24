import ErrorPage from "../components/ErrorPage";
import Root from "../components/Root";
import Dashboard from "../views/dashboard/components/Dashboard";
import Login from "../views/login/components/Login";
import Register from "../views/register/components/Register";
import Settings from "../views/settings/components/Settings";

const routes = [
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //action: isAuthenticatedAction,

    children: [
      {
        path: "settings/",
        element: <Settings />,
      },
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
    ]
  }
]

export default routes;