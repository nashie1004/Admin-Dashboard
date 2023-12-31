import { Box, Divider, List, ListItem, ListItemText, Paper } from '@mui/material'
import React from 'react'

export default function RightSidebar() {
  return (
    <Box>
    <Paper
        sx={{
            p: 2,
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

          </Paper>
    </Box>
  )
}
