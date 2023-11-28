import { Box } from '@mui/material';
import React, { useCallback } from 'react';

const ContentLayout = () => {
  const renderContent = useCallback(() => {
    return null;
  }, []);

  return <Box sx={{ display: 'flex', flex: '1 1 auto' }}>content</Box>;
};

export default ContentLayout;
