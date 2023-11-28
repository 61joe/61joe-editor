import React from 'react';
import BarLayout from '../BarLayout';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
  return (
    <Box component="div" sx={{ display: 'flex', height: '100%' }}>
      <BarLayout />
      <Outlet />
    </Box>
  );
};

export default GlobalLayout;
