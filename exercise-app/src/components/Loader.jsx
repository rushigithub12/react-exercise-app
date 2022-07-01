import React from 'react';
import { Stack } from '@mui/material';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">  
    <Oval color="#7C3AED" height={80} width={80} />
    </Stack>
  )
}

export default Loader