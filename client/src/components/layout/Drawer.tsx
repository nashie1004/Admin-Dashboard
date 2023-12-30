import React from 'react'
import { styled } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Sidebar from './Sidebar';
import { Toolbar, Typography } from '@mui/material';
import Profile from '../Profile';

const DrawerFn = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: 240,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8),
          },
        }),
      },
    }),
  );
  
  
export default function Drawer() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

  return (
    <>
        {/* This opens or close sidebar */}
        <DrawerFn variant="permanent" open={open} PaperProps={{
        sx: {
            //bgcolor: '#0288d1'               
        }
        }}>
        <Toolbar
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
            }}
        >
          <IconButton>
            <Profile />
          </IconButton>
          <Typography>Full Name</Typography>
          <IconButton onClick={toggleDrawer} sx={{ml: 5}}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
            <Sidebar />
        </List>
        </DrawerFn>
    </>
  )
}
