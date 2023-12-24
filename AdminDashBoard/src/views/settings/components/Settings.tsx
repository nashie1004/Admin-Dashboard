import { Backdrop, Button, CircularProgress, Container, CssBaseline, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Rating, Select, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DatePicker } from '@mui/x-date-pickers';

export default function Settings() {
  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    alert('submit')
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <CssBaseline />
        <Typography variant="h6" gutterBottom color={'text.secondary'}>
          Form Setting
        </Typography>

        <Dialog disableEscapeKeyDown open={false} onClose={() => {}}>
          <DialogTitle>Fill the form</DialogTitle>
          <DialogContent></DialogContent>
        </Dialog>
        
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={false}
          onClick={() => {}}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        
        <Paper elevation={3} sx={{ mb: 2, mt: 1, p: 2 }}>
          <Grid container spacing={0}>
            <Grid item xs={0} sm={0}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={0} sm={0}>
              <TextField
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              />
            </Grid>
            <Grid item xs={0} sm={0}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={0} sm={0}>
              <FormControl sx={{ minWidth: 150 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={2}
                  label="Age"
                  onChange={() => {}}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={0} sm={0}>
              <DatePicker label="Birthday" />
            </Grid>
            <Grid item xs={0} sm={0}>
            </Grid>


            <Grid item >
              <Button fullWidth variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>

          </Grid>
        </Paper>

        <Paper elevation={3}>
          
          <FormControl sx={{ m: 1, minWidth: 80 }} component="form" onSubmit={handleSubmit}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={2}
              label="Age"
              onChange={() => {}}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <DatePicker />
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            />
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            />
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={2}
                onChange={(event, newValue) => {
                  //setValue(newValue);
                }}
              />
            <Button variant="contained"  endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>
        </Paper>
      </Box>
    </>
  )
}
