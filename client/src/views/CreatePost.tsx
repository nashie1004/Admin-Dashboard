import { Box, Button, Card, CardActions, CardContent, Container, FormControl, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

enum BoxId {
  Post = 0,
  Image = 1,
}

export default function CreatePost() {
  const [tabValue, setTabValue] = useState<BoxId>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: BoxId) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Typography variant='h5' gutterBottom>Create a post</Typography>
      <Card>
        <CardContent>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Post" value={BoxId.Image} />
                <Tab label="Image" value={BoxId.Post} />
              </Tabs>
            </Box>

            <Box sx={{ 
              display: tabValue !== Number(BoxId.Image) ? "none" : "block" 
              ,p: 2
              }}
            >
              <FormControl fullWidth sx={{mb:2}}>
                <TextField 
                  label="Title"
                  size='small'
                  variant="outlined" />
              </FormControl>
              <FormControl fullWidth>
                <TextField 
                  label="Body"
                  variant="outlined" />
              </FormControl>

            </Box>
            <Box sx={{ 
              display: tabValue !== Number(BoxId.Post) ? "none" : "block" 
              }}
            >
              <Typography>Image</Typography>
            </Box>
            
          </Box>
        </CardContent>
        <CardActions sx={{p: 2}}>
          <Button  
              variant="contained" endIcon={<SendIcon />}>
            Post
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
