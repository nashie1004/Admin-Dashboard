import { Paper, Box, Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, List, ListItem } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Paths } from '../../utils/constants'
import { sideBarRoutes } from '../../utils/routes'

export default function LeftSidebar() {
  return (
    <Box>
    <Paper 
        sx={{
            p: 2,
            height: 500,
            position: "sticky",
            top: 100
        }}>

        <List  component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Inbox" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Spam" />
      </ListItem>
    </List>    
    {/* {sideBarRoutes.map((item, i) => (

<>
  <NavLink to={item.routePath} key={i} 
  style={{textDecoration: 'none'}}
    className={({ isActive, isPending }) =>
    isActive
      ? "active"
      : isPending
      ? "pending"
      : ""
  }>
    <ListItemButton >
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
  
))} */}
    </Paper>
    </Box>
  )
}
