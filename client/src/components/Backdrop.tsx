import React from 'react'
import { Box, Backdrop as BackdropFn, CircularProgress, Dialog, DialogContent, DialogTitle } from '@mui/material'

export default function Backdrop({open}) {
  return (
    <Box>
        <BackdropFn
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={() => {}}
        >
          <CircularProgress color="inherit" />
        </BackdropFn>
    </Box>
  )
}
