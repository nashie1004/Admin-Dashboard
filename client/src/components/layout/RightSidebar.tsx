import { Box, Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Divider, List, ListItem, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

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
        <CardHeader
        title="Home"
        subheader={
          <Typography variant="body2" color="default" >
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, fugit."
              }
          </Typography>
        }> 
          
        </CardHeader>
          <CardContent>
            <Stack direction="column">
              <Button variant="contained" endIcon={<SendIcon />}>
                Create Community
              </Button>
            </Stack>
          </CardContent>
      </Card>

    <Paper
        sx={{
            p: 1,
            height: 300,
            position: "sticky",
            top: 100
        }}
          >
<List  component="nav" aria-label="mailbox folders">
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
          </Paper>
    </Box>
  )
}
