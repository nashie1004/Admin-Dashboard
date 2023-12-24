import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from './Sidebar';
import { Avatar, ListItemIcon, MenuItem, MenuList, Paper, Tooltip } from '@mui/material';
import { deepOrange, deepPurple, lightBlue } from '@mui/material/colors';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';
import MuiAppBar from '@mui/material/AppBar';
import Copyright from './Copyright';
import Menu from '@mui/material/Menu';
import { Logout } from '@mui/icons-material';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
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
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


export default function MainLayout() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openEl = Boolean(anchorEl);

  return <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex', width: 1 }}>
          <CssBaseline />
          <AppBar position="absolute" open={open} color='info' >
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Admin Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton 
              color="inherit" 
              id="demo-positioned-button"
              aria-controls={openEl ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openEl ? 'true' : undefined}
              onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <Avatar sx={{ bgcolor: deepOrange[500] }}>OP</Avatar>
              </IconButton>
                
              <Menu 
              id="demo-positioned-menu"
              anchorEl={anchorEl}
              open={openEl}
              aria-labelledby="demo-positioned-button"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              >
                <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>My account</MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              
            </Toolbar>
          </AppBar>
          {/* This opens or close sidebar */}
          <Drawer variant="permanent" open={open} PaperProps={{
            // sx: {
            //   bgcolor: '#0288d1'               
            // }
          }}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              {/* <Typography variant='h5' align='left'>Test</Typography> */}
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              <Sidebar />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

              <React.Suspense fallback={<Loading />}>
                {/* Main Content */}
                <Outlet />
              </React.Suspense>

            </Container>
        <Copyright sx={{ mb: 4 }} />

          </Box>
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  </>;
}