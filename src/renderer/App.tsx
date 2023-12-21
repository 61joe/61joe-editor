import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import router from './router';

export default function App() {
  return (
    <React.StrictMode>
      <React.Fragment>
        <CssBaseline />
        <RouterProvider router={router} />
      </React.Fragment>
    </React.StrictMode>
  );
}
