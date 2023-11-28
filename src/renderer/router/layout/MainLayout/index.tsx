import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import MiddleLayout from '../MiddleLayout';

const MainLayout = () => {
  return (
    <Box sx={{ flex: '1 1 auto', display: 'flex' }}>
      <MiddleLayout />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
