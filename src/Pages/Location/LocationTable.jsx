import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'provinces', label: 'Provinces', minWidth: 100 },
  { id: 'district', label: 'District', minWidth: 100 },
  { id: 'city', label: 'City', minWidth: 100 },
  { id: 'villages', label: 'Villages', minWidth: 100 },
];

const rows = [
  { id: 1, provinces: 'Punjab', district: 'Lahore', city: 'Lahore', villages: 150 },
  { id: 2, provinces: 'Sindh', district: 'Karachi', city: 'Karachi', villages: 100 },
  { id: 3, provinces: 'Khyber Pakhtunkhwa', district: 'Peshawar', city: 'Peshawar', villages: 80 },
  { id: 4, provinces: 'Balochistan', district: 'Quetta', city: 'Quetta', villages: 60 },
  { id: 5, provinces: 'Gilgit-Baltistan', district: 'Skardu', city: 'Skardu', villages: 40 },
  { id: 6, provinces: 'Azad Kashmir', district: 'Muzaffarabad', city: 'Muzaffarabad', villages: 30 },
  // Add more rows as needed
];


export default function LocationTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <Typography variant="h5">Locations </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField label="Find Filter" variant="outlined" size="small" style={{ marginRight: '10px' }} />
          <Button variant="contained" color="primary">Add</Button>
        </div>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align="center" // Adjust alignment as needed
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center"> {/* Adjust alignment as needed */}
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
