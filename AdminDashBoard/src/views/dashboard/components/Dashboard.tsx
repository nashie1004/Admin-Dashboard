import { Copyright } from '@mui/icons-material';
import { Grid, Paper } from '@mui/material';
import Deposits from './Deposits';
import Orders from './Orders';
import LinearChart from './LineChart';
import PieChart from './Chart';

export default function Dashboard() {

  function _RenderBody(){
    return <>
      {/* <h1>
        Dashboard
      </h1>
      <Button variant="contained">Hello world</Button>; */}

      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <LinearChart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Deposits /> 
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <PieChart />
          </Paper>
        </Grid>
      <Copyright sx={{ pt: 4 }} />
    </>
  }

  return (
    <div>
      {_RenderBody()}
    </div>
  )
}
