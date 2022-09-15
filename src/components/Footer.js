import React from 'react';
import { Stack, Box, typography } from '@mui/system';

import Logo from '../assets/images/Logo-1.png'
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#EAE3D2">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant='h5' pb='40px' mt='10px'>
          Made in React ❤ by BrianBravoski
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer