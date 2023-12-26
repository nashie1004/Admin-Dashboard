import { Box, CssBaseline, Skeleton, Stack, Typography } from '@mui/material';
import Backdrop from '../../components/Backdrop';
import Dialog from '../../components/Dialog';

export default function Discover() {
  return <Box>
    <CssBaseline />
    <Typography variant="h6" gutterBottom color={'text.secondary'}>
      Discover
    </Typography>

    <Dialog open={false} />
    <Backdrop open={false} />

    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
</Box>;
}