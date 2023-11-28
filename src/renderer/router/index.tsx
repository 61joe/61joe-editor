import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { GlobalLayout, MainLayout, ContentLayout } from './layout';

const router = createBrowserRouter([
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
