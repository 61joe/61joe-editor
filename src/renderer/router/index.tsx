import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { GlobalLayout, MainLayout, ContentLayout } from './layout';
import loadable from '@loadable/component';

const LoginPage = loadable(() => import('@pages/Login'));

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
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
