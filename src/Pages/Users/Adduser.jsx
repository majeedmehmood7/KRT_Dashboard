import React from 'react';
import { Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

const Adduser = () => {
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <h3>Add Users </h3>
          <TextField id="outlined-basic" label="Username" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <TextField id="outlined-basic" label="Type" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <TextField id="outlined-basic" label="Password" variant="outlined" size='small' sx={{minWidth: '100%'} } />
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<AddIcon />}>
            Add
      </Button>
    </Stack>
        </Box>
      );
    }

export default Adduser;