import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { redirect, useNavigate } from 'react-router-dom';
import { Paths } from '../../utils/constants';

export default function DashboardSidebar() {
  const navigate = useNavigate();

  const dummySideBars: number[] = new Array(3).fill(0);

  return (
    <Box>
      <Card sx={{
        mb: 2
      }}>
        <CardMedia
          component="img"
          height="50"
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Paella dish"
        />
          <CardContent>
            <Typography variant="h6" gutterBottom>Home</Typography>
          <Typography variant="body2" color="default" gutterBottom>
              {
              "Your personal SocialSphereX frontpage. Come here to check in with your favorite communities"  
              }
          </Typography>
            <Stack direction="column" sx={{mt: 1}} spacing={2}>
              <Button 
              onClick={() => navigate(Paths.Post)}
              variant="contained" endIcon={<SendIcon />}>
                Create Post
              </Button>
              <Button 
              onClick={() => navigate(Paths.Community)}
              variant="outlined" endIcon={<AddIcon />}>
                Create Community
              </Button>
            </Stack>
          </CardContent>
      </Card>

  <Card
    sx={{
      position: "sticky",
      top: 100
    }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>Suggested Communities</Typography>
        
    <List dense>

      {dummySideBars.map((item, i) => (
        <ListItem sx={{p: 0}} key={i}
        secondaryAction={
          <IconButton edge="end" title="Go to ##">
            <ChevronRightIcon />
          </IconButton>
        }>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"Community 1"} secondary={"0 members"} />
        </ListItem>
      ))}
      
    </List>

        
      </CardContent>
  </Card>
{/* {sideBarRoutes.map((item, i) => (

<>
  <NavLink to={item.routePath} key={i} 
  style={{textDecoration: 'none'}}
    className={({ isActive, isPending }) =>
    isActive
      ? "active"
      : isPending
      ? "pending"
      : ""
  }>
    <ListItemButton >
      <ListItemIcon>
        {item.routeElement}
      </ListItemIcon>
      <ListItemText primary={
          <Typography color='text.primary'>{item.routeName}</Typography>
        } 
      />
    </ListItemButton>
  </NavLink>
</>
  
))} */}
    </Box>
  )
}
