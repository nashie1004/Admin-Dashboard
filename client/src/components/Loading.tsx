import { CircularProgress, Box, Container, Skeleton, Paper } from '@mui/material'

export default function Loading() {
  return (
    <>
      <Box 
      sx={{display: "flex", mt:2, mb:2}}
      >
        <CircularProgress sx={{mx: "auto"}}/>
      </Box>
      
      <Paper>
        <Skeleton sx={{mb: 2}}
        variant="rectangular" animation="wave"  height={100} />
        <Skeleton variant="rectangular" animation="wave"  height={300} />
      </Paper>

    </>
  )
}
