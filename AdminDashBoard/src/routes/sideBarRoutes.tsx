import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ISideBarRoutes from "../utils/types/sideBarTypes";

const sideBarRoutes: ISideBarRoutes[] = [
    {
      routePath: "/",
      routeName: "Dashboard",
      routeElement: <DashboardIcon />
    },
    {
      routePath: "/discover",
      routeName: "Discover",
      routeElement: <ShoppingCartIcon />
    },
    // {
    //   routePath: "/",
    //   routeName: "Tasks",
    //   routeElement: <PeopleIcon />
    // },
    // {
    //   routePath: "/",
    //   routeName: "Assign",
    //   routeElement: <AssignmentIcon />
    // },
    {
      routePath: "/manage",
      routeName: "Manage",
      routeElement: <BarChartIcon />
    },
    {
      routePath: "/settings",
      routeName: "Settings",
      routeElement: <LayersIcon />
    },
    {
      routePath: "/login",
      routeName: "Logout",
      routeElement: <PeopleIcon />
    },
  ]

export default sideBarRoutes