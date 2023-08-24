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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'provinces', label: 'Item Name', minWidth: 100 }, // Renamed from 'Provinces'
  { id: 'district', label: 'Category Name', minWidth: 100 }, // Renamed from 'District'
  { id: 'city', label: 'Unit', minWidth: 100 }, // Renamed from 'City'
  { id: 'villages', label: 'Villages', minWidth: 100 },
  { id: 'edit', label: 'Edit', minWidth: 50 },
  { id: 'delete', label: 'Delete', minWidth: 50 },
];

const rows = [
  { id: 1, provinces: 'Punjab', district: 'Lahore', city: 'Lahore', villages: 150 },
  { id: 2, provinces: 'Sindh', district: 'Karachi', city: 'Karachi', villages: 100 },
  { id: 3, provinces: 'Khyber Pakhtunkhwa', district: 'Peshawar', city: 'Peshawar', villages: 80 },
  { id: 4, provinces: 'Balochistan', district: 'Quetta', city: 'Quetta', villages: 60 },
  { id: 5, provinces: 'Gilgit-Baltistan', district: 'Skardu', city: 'Skardu', villages: 40 },
  { id: 6, provinces: 'Azad Kashmir', district: 'Muzaffarabad', city: 'Muzaffarabad', villages: 30 },
];

export default function Receivedtable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <AddLocation/> */}
          </Box>
        </Modal>

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <UpdateLocation/> */}
          </Box>
        </Modal>
      </div>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <Typography variant="h5">Locations </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField label="Find Filter" variant="outlined" size="small" style={{ marginRight: '10px' }} />
            <Button variant="contained" color="primary" onClick={handleOpen}>Add</Button>
          </div>
        </div>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align="center"
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
                          <TableCell key={column.id} align="center">
                            {column.id === 'edit' ? (
                              <Button variant="outlined" startIcon={<EditIcon />} size="small" onClick={handleOpen1} >
                                Edit
                              </Button>
                            ) : column.id === 'delete' ? (
                              <Button variant="outlined" startIcon={<DeleteIcon />} size="small">
                                Delete
                              </Button>
                            ) : (
                              value
                            )}
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
    </>
  );
}
