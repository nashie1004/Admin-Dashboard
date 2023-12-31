import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading';
import Copyright from './Copyright';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { defaultTheme, darkTheme } from '../../utils/theme';
import Topbar from './Topbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { Grid } from '@mui/material';

export default function MainLayout() {

  return <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={defaultTheme}>
        <Box >
          <CssBaseline />
          <Topbar />
          
            <Grid container spacing={3}  justifyContent="center"
            sx={{
              p: 2,
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              }}
            >
              {/* <Grid item xs={2}>
                <LeftSidebar />
              </Grid> */}
              <Grid item xs={7}>
                <React.Suspense fallback={<Loading />}>
                  <Outlet />
                  {/* <Copyright sx={{ mb: 7, mt: 7 }} /> */}
                </React.Suspense>
              </Grid>
              <Grid item xs={3}>
                <RightSidebar />
              </Grid>
            </Grid>
          
        </Box>
      </ThemeProvider>
    </LocalizationProvider>
  </>;
}