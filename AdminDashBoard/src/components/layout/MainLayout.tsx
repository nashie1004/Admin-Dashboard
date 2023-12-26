import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading';
import Copyright from './Copyright';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { defaultTheme } from '../../utils/theme';
import Drawer from './Drawer';


export default function MainLayout() {

  return <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex', width: 1 }}>
          <CssBaseline />
          
          {/* Sidebar/Drawer */}
          <Drawer />
          
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
                {/* Main Content here */}
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