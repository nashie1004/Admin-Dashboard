import { Box, Container, Skeleton } from '@mui/material'

export default function SkeletonLoadingSidebar() {
  return (
    <Container>
      <Box>
          <Skeleton  
          sx={{mb: 2}} 
          variant="rectangular" 
          animation="wave"  
          height={300} />
      </Box>
    </Container>
  )
}
