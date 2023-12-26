import { Avatar, Box, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

export default function Profile() {
  return (
    <Box>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Box>
  )
}
