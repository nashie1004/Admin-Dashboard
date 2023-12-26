import { Box, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import Deposits from '../../components/Deposits';
import Orders from '../../components/Orders';
import LinearChart from '../../components/LineChart';
import PieChart from '../../components/Chart';

export default function Dashboard() {

  return (
    <Box>
    <CssBaseline />
    <Typography variant="h6" gutterBottom color={'text.secondary'}>
      Dashboard
    </Typography>

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
        <Grid item>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Orders />
          </Paper>
        </Grid>
        <Grid item >
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
