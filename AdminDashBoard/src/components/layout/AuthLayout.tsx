import { Box, ThemeProvider } from '@mui/material'
import React from 'react'
import Loading from '../Loading'
import { Outlet } from 'react-router-dom'
import { defaultTheme } from '../../utils/theme'
import CssBaseline from '@mui/material/CssBaseline';

export default function AuthLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <CssBaseline />
        <React.Suspense fallback={<Loading />}>
          <Outlet />
        </React.Suspense>
      </Box>
    </ThemeProvider>
  )
}
