import ErrorPage from "../components/layout/ErrorPage";
import Root from "../components/layout/Root";
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
        path: "",
        element: <Dashboard />,
      },
      {
        path: "settings/",
        element: <Settings />,
      },
    ]
  }
]

export default routes;