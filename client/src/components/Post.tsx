import { Paper, Box, Grid, Typography, Divider, Stack, Chip, Button, Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

export default function Post() {
  return (
    <>
    
    <Card sx={{ mb: 2}}>
    <CardActionArea>

        <CardContent>
            <Box sx={{ my: 3, mx: 2 }}>
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
        </Box>
        </CardContent>



      </CardActionArea>
      </Card>
    </>
  )
}
