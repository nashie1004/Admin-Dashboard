import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import SkeletonLoading from './SkeletonLoading';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { defaultTheme, darkTheme } from '../../utils/theme';
import Topbar from './Topbar';
import MainSubLayout from './MainSubLayout';
import SkeletonLoadingSidebar from './SkeletonLoadingSidebar';

export default function MainLayout() {

  return <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider 
      theme={true ? defaultTheme : darkTheme}
      >
          
        <CssBaseline />
        <Topbar />
        <React.Suspense 
        fallback={
          <MainSubLayout 
            Main={<SkeletonLoading />} 
            Sidebar={<SkeletonLoadingSidebar />} 
          />
        }>
          <Outlet />
        </React.Suspense>

      </ThemeProvider>
    </LocalizationProvider>
  </>;
}