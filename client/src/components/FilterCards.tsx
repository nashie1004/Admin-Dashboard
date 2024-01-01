import { Stack, Button, Select, MenuItem, Typography, Card, CardContent, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { filterButtons, dashboardOrientation } from '../utils/other'
import { useState } from 'react';

export default function FilterCards() {
  const [orientation, setOrientation] = useState<number>(1);

  return (
    <Card sx={{mb: 2, p: 2}}>
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

          <ToggleButtonGroup
      // value={alignment}
      size="small" 
      exclusive
      // onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        1
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        2
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        3
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        4
      </ToggleButton>
    </ToggleButtonGroup>
      
      </Stack>

    </Card>
  )
}
