import { Paper, Box, Grid, Typography, Divider, Stack, Chip, Button, Card, CardActionArea, CardContent, Container, IconButton, Tooltip, CardActions, Breadcrumbs, Avatar } from '@mui/material'
import React from 'react'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { deepOrange } from '@mui/material/colors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Post() {
  return (
    <Card sx={{ mb: 2, display: 'flex',  }}>

      <CardActions>
        <Stack direction={"column"}>

          <Tooltip title="Like">
            <IconButton>
              <ThumbUpOffAltIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="overline"  >
          1
          </Typography>
          <Tooltip title="Dislike">
            <IconButton>
              <ThumbDownOffAltIcon />
            </IconButton>
          </Tooltip>

        </Stack>
      </CardActions>

      <CardActionArea>
        <CardContent>

        <Stack spacing={1} direction={"row"} sx={{mb: 1}}>
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Avatar sx={{ 
              bgcolor: deepOrange[500], width: 24, height: 24 
              }}>
              <Typography sx={{fontSize: 13}}>N</Typography>
            </Avatar>
          </Breadcrumbs>
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Typography variant="caption">
              {"/community"}
            </Typography>
          </Breadcrumbs>
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Typography variant="caption">
              {"Posted by Lorem, ipsum dolor. 8hrs ago"} 
            </Typography>
          </Breadcrumbs>
        </Stack>
          
        <Box sx={{mb: 1}}>
          <Stack spacing={1} direction={"row"}>
            <Typography variant="h5" component="div">
              Lorem, ipsum dolor.
            </Typography>
            <Chip size="small" label="Chip Filled" />
            <Chip size="small" label="primary" color="primary" variant="outlined" onClick={() => {}}  />
            <Chip size="small" label="success" color="success" variant="outlined" onClick={() => {}} />
          </Stack>

        </Box>

        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>

        <Box>
          <IconButton 
          title="Comments"
          sx={{mb: 0, mr: 0, ml: 0, mt: 0}}>
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="overline"  gutterBottom >
          4 Comments
          </Typography>
        </Box>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}
