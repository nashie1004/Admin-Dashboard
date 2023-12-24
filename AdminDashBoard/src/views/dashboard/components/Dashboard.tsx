import Button from '@mui/material/Button';

export default function Dashboard() {

  function _RenderBody(){
    return <>
      <h1>
        Dashboard
      </h1>
      <Button variant="contained">Hello world</Button>;
    </>
  }

  return (
    <div>
      {_RenderBody()}
    </div>
  )
}
