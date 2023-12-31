import { Box, Button, Chip, Container, CssBaseline, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import Deposits from '../components/Deposits';
import Orders from '../components/Orders';
import LinearChart from '../components/LineChart';
import PieChart from '../components/Chart';
import Post from '../components/Post';

export default function Dashboard() {

  return (
    <Container>
    <CssBaseline />
    {/* <Typography variant="h6" gutterBottom color={'text.secondary'}>
      Dashboard
    </Typography> */}

      <Paper sx={{p:2, mb: 2}}>
        Create Post
      </Paper>

      <Post />
      <Post />

    </Container>
  )
}
