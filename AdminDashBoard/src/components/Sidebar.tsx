import { Link,   NavLink} from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import sideBarRoutes from '../routes/sideBarRoutes';


export default function Sidebar() {
  return (
    <>
    <div className="d-flex align-items-start">
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      </div>
    </div>

    {sideBarRoutes.map((item, i) => (

      <>
        {item.routePath === "/settings" && <>
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div" inset>
            Saved reports
          </ListSubheader>
        </>}
        <NavLink to={item.routePath} key={i} 
          className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : ""
        }>
          <ListItemButton sx={{ height: 40 }}>
            <ListItemIcon>
              {item.routeElement}
            </ListItemIcon>
            <ListItemText primary={item.routeName} />
          </ListItemButton>
        </NavLink>
      </>
        
    ))}

    </>
  )
}
