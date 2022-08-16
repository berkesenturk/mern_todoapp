import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" width ='100%'/>
    </Box>
  );
}
