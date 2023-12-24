import { DataGrid, GridToolbar, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Box, CssBaseline, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Manage() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    visibleFields: ['name', 'rating', 'country', 'dateCreated', 'isAdmin'],
    rowLength: 100,
  });

  console.log(data)

  return (
    <Box>
    <CssBaseline />
    <Typography variant="h6" gutterBottom color={'text.secondary'}>
      Manage
    </Typography>

        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <LinearProgress />
            <DataGrid
            sx={{p: 2}}
                rows={rows}
                columns={columns}

                  {...data}

                  initialState={{
                  pagination: {
                      paginationModel: {
                      pageSize: 10,
                      },
                  },
                  }}

                density="standard" //standard compact
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                slots={{
                    toolbar: GridToolbar,
                  }}
            />
          </Paper>
        </Grid>

        
    </Box>
  );
}