import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function CreatePost() {
  return (
    <Card sx={{mb: 2}}>
        <CardActionArea>
            <CardContent>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>

                Create Post
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
