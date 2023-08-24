import React from 'react';
import { Box} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const UpdateLocation = () => {
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <h3>Edited Location </h3>
          <TextField id="outlined-basic" label="Provinces" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <TextField id="outlined-basic" label="District" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <TextField id="outlined-basic" label="City" variant="outlined" size='small' sx={{minWidth: '100%'} } />
          <TextField id="outlined-basic" label="Villages" variant="outlined" size='small' sx={{minWidth: '100%'} }/>
          <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<ModeEditOutlineIcon />}>
            Edited
      </Button>
    </Stack>
        </Box>
      );
    }

export default UpdateLocation