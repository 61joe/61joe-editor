import * as React from 'react';
import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { GlobalLayout, MainLayout, ContentLayout } from './layout';

const router = createHashRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <ContentLayout />,
          },
        ],
      },
    ],
  },
]);

export default router;
