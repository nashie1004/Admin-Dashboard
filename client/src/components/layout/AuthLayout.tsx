import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import SkeletonLoading from './SkeletonLoading'
import { Outlet } from 'react-router-dom'
import { defaultTheme, darkTheme } from '../../utils/theme'
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from './Copyright'

export default function AuthLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <CssBaseline />
      <React.Suspense fallback={<>TODO</>}>
        <Outlet />
        <Copyright sx={{ mt: 4 }} />
      </React.Suspense>
      
    </ThemeProvider>
  )
}
