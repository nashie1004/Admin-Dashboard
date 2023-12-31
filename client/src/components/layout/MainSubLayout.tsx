import { Grid, Container } from '@mui/material'

type IMainSubLayout = {
    Main: JSX.Element,
    Sidebar: JSX.Element
}

export default function MainSubLayout({ Main, Sidebar }: IMainSubLayout) {
  return (
    <Grid container spacing={3}  justifyContent="center"
    sx={{
      p: 2,
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      }}
    >
      <Grid item xs={7}>
        <Container>
            {/* Start Main Content */}
            {Main}
            {/* End Main Content */}
        </Container>
      </Grid>
      <Grid item xs={3}>
        {/* Start Page Right Sidebar */}
        {Sidebar}
        {/* End Page Right Sidebar */}
      </Grid>
    </Grid>
  )
}
