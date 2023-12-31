import { Box, Button, Chip, Container, CssBaseline, Divider, Grid, Paper, Stack, Typography } from '@mui/material';

import Post from '../components/Post';
import CreatePost from '../components/CreatePost';

export default function Dashboard() {

  return (
    <Container>
    <CssBaseline />

      <CreatePost />
      <Post />
      <Post />

    </Container>
  )
}
