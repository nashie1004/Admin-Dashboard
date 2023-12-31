import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Copyright(props) {
  return (<>
  
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Github  '}
      <Link to={import.meta.env.VITE_REACT_APP_REPO_URL}>
        Repository
      </Link>
    </Typography>
  </>
  )
}
