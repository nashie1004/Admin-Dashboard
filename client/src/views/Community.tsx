import { Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material'
import PostCard from '../components/PostCard'
import FilterCards from '../components/FilterCards';

export default function Community() {

  const dummyPosts: number[] = new Array(3).fill(0);

  return (
    <Container>
      <Card sx={{mb: 2}}>
        <Box
        sx={{
          height: 20,
          backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.warning.light
            : theme.palette.warning.dark,
        }}
        />
        <CardHeader
        title={
          <Typography variant='h4'>
          c/Community
        </Typography>
        }
        subheader={
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Lorem ipsum dolor sit amet.
          </Typography>
        }
        action={
          <Button
            color="secondary"
            disabled={false}
            size="small"
            variant="outlined"
            sx={{mr: 1}}
          >Join</Button>
        }
        />
      </Card>

      <FilterCards />

      {dummyPosts.map((item, i) => (
        <PostCard key={i} />
      ))}
    
    </Container>
  )
}
