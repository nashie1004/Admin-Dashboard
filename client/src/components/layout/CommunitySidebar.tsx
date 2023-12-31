import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export default function CommunitySidebar() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>About c/Community</Typography>
          <Typography variant="body2" color="default" gutterBottom>
            {" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis minus quisquam iure natus unde dolorem itaque laudantium nulla accusamus quibusdam ipsum sequi quis eum consequatur, voluptatem officiis? Dolor, eligendi quisquam. "}
          </Typography>

          <Divider />

          <Typography mt={1} variant='subtitle2'>Created: Mar 19, 2011</Typography>
          <Typography variant='subtitle2'>Members: 1</Typography>

          <Stack mt={2}>
            <Button              
            variant="contained" 
            endIcon={<AddIcon />}>
              Create Post
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}
