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
import { userThemeStore } from '../../hooks/useThemeStore';
import { Suspense } from 'react';

export default function MainLayout() {
  const theme = userThemeStore((state) => state.theme)

  return <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider 
      theme={theme === "LIGHT" ? defaultTheme : darkTheme}
      >
          
        <CssBaseline />
        <Topbar />
        <Suspense 
        fallback={
          <MainSubLayout 
            Main={<SkeletonLoading />} 
            Sidebar={<SkeletonLoadingSidebar />} 
          />
        }>
          <Outlet />
        </Suspense>

      </ThemeProvider>
    </LocalizationProvider>
  </>;
}