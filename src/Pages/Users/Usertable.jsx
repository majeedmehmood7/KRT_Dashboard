import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Button, InputAdornment, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Adduser from './Adduser';
import Updateuser from './Updateuser';

const columns = [
  { field: 'id', headerName: 'User ID', width: 90 },
  { field: 'username', headerName: 'Username', width: 130 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'warehouseLocation', headerName: 'Warehouse Location', width: 160 },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 70,
    renderCell: (params) => (
      <button>
        <EditIcon />
      </button>
    ),
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 90,
    renderCell: (params) => (
      <button >
        <DeleteIcon />
      </button>
    ),
  },
];

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

const rows = [
  { id: 1, username: 'jsnow', type: 'Admin', warehouseLocation: 'North' },
  { id: 2, username: 'clannister', type: 'User', warehouseLocation: 'South' },
  { id: 3, username: 'jlannister', type: 'User', warehouseLocation: 'East' },
  { id: 4, username: 'astark', type: 'User', warehouseLocation: 'West' },
  { id: 5, username: 'dtargaryen', type: 'Admin', warehouseLocation: 'Dragonstone' },
];

export default function Usertable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

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
            <Adduser />
          </Box>
        </Modal>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Updateuser />
          </Box>
        </Modal>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', height: 400, width: '100%' }}>
        <h2>User Management</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" startIcon={<AddIcon />} color="primary" onClick={handleOpen}>
            Add User
          </Button>
        </div>
        <div style={{ flex: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
