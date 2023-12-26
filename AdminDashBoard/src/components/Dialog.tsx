import React from 'react'
import { Box, CircularProgress, Dialog as DialogFn, DialogContent, DialogTitle } from '@mui/material'

export default function Dialog({open}) {
  return (
    <Box>
        <DialogFn disableEscapeKeyDown open={open} onClose={() => {}}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent></DialogContent>
        </DialogFn>
    </Box>
  )
}
