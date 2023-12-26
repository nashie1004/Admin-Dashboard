import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import Loading from '../Loading'
import { Outlet } from 'react-router-dom'
import { defaultTheme, darkTheme } from '../../utils/theme'
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from './Copyright'

export default function AuthLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <CssBaseline />
        <React.Suspense fallback={<Loading />}>
          <Outlet />
          <Copyright sx={{ mt: 3 }} />

        </React.Suspense>
      </Box>
    </ThemeProvider>
  )
}
