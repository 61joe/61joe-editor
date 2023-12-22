import {
  Avatar,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
} from '@mui/material';
import React from 'react';
import AppLogo from '@public/images/logo.png';
import LoginPasswordFrom from './LoginPasswordForm';

const formWidth = 256;

const LoginPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: '16px',
        gap: 2,
      }}
    >
      <Avatar src={AppLogo} variant="square" sx={{ height: 128, width: 128 }} />
      <LoginPasswordFrom />
    </Container>
  );
};

export default LoginPage;
