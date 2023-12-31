import { Box, Button, Card, CardContent, Chip, Container, CssBaseline, Divider, Grid, InputLabel, MenuItem, Paper, Select, Skeleton, Stack, Typography } from '@mui/material';
import Post from '../components/Post';
import {dashboardOrientation, filterButtons} from '../utils/other'
import { useState } from 'react';
import Loading from '../components/Loading';

export default function Dashboard() {
  const [orientation, setOrientation] = useState<number>(1);

  const dummyPosts: number[] = new Array(3).fill(0);

  return (
    <Container>
    <CssBaseline />

      <Card sx={{mb: 2}}>
        <CardContent>
          <Stack direction="row" spacing={1} >

            {filterButtons.map((item, i) => (
              <Button variant="outlined" size="small" key={i}
              startIcon={item.btnComponent}>
                {item.btnTitle}
              </Button>
            ))}         

            <Select sx={{mx: "auto"}}
              labelId="orientation-select-label"
              id="orientation-select"
              size='small'
              value={orientation}
              >
                {dashboardOrientation.map((item, i) => (
                  <MenuItem 
                  onClick={() => setOrientation(item.btnValue)}
                  value={item.btnValue} 
                  key={i}>
                    <Typography>{item.btnTitle}</Typography>
                  </MenuItem>
                ))}
            </Select>

          </Stack>
        </CardContent>
      </Card>
        
      {dummyPosts.map((item, i) => (
        <Post key={i} />
      ))}

      <Loading />

    </Container>
  )
}
