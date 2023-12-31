import { Container, } from '@mui/material';
import PostCard from '../components/PostCard';
import FilterCards from '../components/FilterCards';

export default function Dashboard() {

  const dummyPosts: number[] = new Array(6).fill(0);

  return (
  <Container>

    <FilterCards />
    
    {dummyPosts.map((item, i) => (
      <PostCard key={i} />
    ))}

  </Container>
  )
}
