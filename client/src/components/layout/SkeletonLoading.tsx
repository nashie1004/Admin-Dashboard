import { CircularProgress, Box, Container, Skeleton, Paper } from '@mui/material'

export default function SkeletonLoading() {
  return (
    <Container>
      <Box>
        <Skeleton sx={{mb: 2}}
        variant="rectangular" animation="wave" height={70} />
      </Box>
      <Box>
        <Skeleton  sx={{mb: 2}} variant="rectangular" animation="wave"  height={300} />
      </Box>
      <Box>
        <Skeleton variant="rectangular" animation="wave"  height={300} />
      </Box>
    </Container>
  )
}
