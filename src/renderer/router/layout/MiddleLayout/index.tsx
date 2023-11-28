import { Box } from '@mui/material';
import React, { useCallback } from 'react';

const MiddleLayout = () => {
  const renderMiddle = useCallback(() => {
    return null;
  }, []);

  return (
    <Box sx={{ maxWidth: '280px', flex: '1 1 auto' }}>middle</Box>
  );
};

export default MiddleLayout;
