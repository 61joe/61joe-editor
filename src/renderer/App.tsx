import {
  MemoryRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Button } from '@mui/material';
import React from 'react';
import icon from '../../assets/icon.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import router from './router';

export default function App() {


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
