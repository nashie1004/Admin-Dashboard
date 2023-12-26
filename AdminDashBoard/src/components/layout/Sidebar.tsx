import { Link,   NavLink} from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Typography } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import { lightBlue } from '@mui/material/colors';
import {sideBarRoutes} from '../../utils/routes'
import { Paths } from '../../utils/constants';

export default function Sidebar() {
  return (
    < >

    {sideBarRoutes.map((item, i) => (

      <>
        {item.routePath === `${Paths.Settings}` && <>
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div" inset>
            Saved reports
          </ListSubheader>
        </>}
        <NavLink to={item.routePath} key={i} style={{textDecoration: 'none'}}
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
            <ListItemText primary={
                <Typography color='text.primary'>{item.routeName}</Typography>
              } 
            />
          </ListItemButton>
        </NavLink>
      </>
        
    ))}

    </>
  )
}
