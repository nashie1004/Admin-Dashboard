import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import { Paths } from '../../utils/constants';

export default function Copyright(props) {
  return (<>
  
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to={Paths.Dashboard}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </>
  )
}
