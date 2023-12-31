import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';

export default function RightSidebar() {
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
              <Button variant="contained" endIcon={<SendIcon />}>
                Create Community
              </Button>
              <Button variant="outlined" endIcon={<AddIcon />}>
                Create Post
              </Button>
            </Stack>
          </CardContent>
      </Card>

  <Card
    sx={{
        minHeight: 300,
        position: "sticky",
        top: 100
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>Recent Posts</Typography>

        <List component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
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
