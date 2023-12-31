import { Paper, Box, Grid, Typography, Divider, Stack, Chip, Button, Card, CardActionArea, CardContent, Container, IconButton, Tooltip, CardActions, Breadcrumbs } from '@mui/material'
import React from 'react'

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function Post() {
  return (
    <Card sx={{ mb: 2, display: 'flex',  }}>

      <CardActions>
        <Stack direction={"column"}>

          <Tooltip title="Up">
            <IconButton>
              <ThumbUpOffAltIcon />
            </IconButton>
          </Tooltip>
          <Typography>1</Typography>
          <Tooltip title="Down">
            <IconButton>
              <ThumbDownOffAltIcon />
            </IconButton>
          </Tooltip>

        </Stack>
      </CardActions>

      <CardActionArea>
        <CardContent>

        <Stack spacing={1} direction={"row"}>
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
          
        <Box>
          <Typography variant="h5" component="div">
            be{0}nev{0}o{0}lent
          </Typography>

          <Stack spacing={1} direction={"row"}>
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

        </CardContent>
      </CardActionArea>

            {/* <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
            <Grid item xs>
                <Typography gutterBottom variant="h4" component="div">
                Toothbrush
                </Typography>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                $4.50
                </Typography>
            </Grid>
            </Grid>
            <Typography color="text.secondary" variant="body2">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
            just down the hall.
            </Typography>
        </Box>
        <Divider variant="middle" />
        <Box sx={{ m: 2 }}>
            <Typography gutterBottom variant="body1">
            Select type
            </Typography>
            <Stack direction="row" spacing={1}>
            <Chip label="Extra Soft" />
            <Chip color="primary" label="Soft" />
            <Chip label="Medium" />
            <Chip label="Hard" />
            </Stack>
        </Box>
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
            <Button>Add to cart</Button>
        </Box> */}
    </Card>
  )
}
