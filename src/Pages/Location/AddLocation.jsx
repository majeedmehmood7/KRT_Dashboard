import React from 'react';
import { Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

const AddLocation = () => {
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <h3>Add Location </h3>
          <TextField id="outlined-basic" label="Provinces" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <TextField id="outlined-basic" label="District" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <TextField id="outlined-basic" label="City" variant="outlined" size='small' sx={{minWidth: '100%'} } />
          <TextField id="outlined-basic" label="Villages" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<AddIcon />}>
            Add
      </Button>
    </Stack>
        </Box>
      );
    }

export default AddLocation