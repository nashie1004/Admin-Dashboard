import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Paths, SideBarRoutes } from '../utils/type';


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

export default sideBarRoutes