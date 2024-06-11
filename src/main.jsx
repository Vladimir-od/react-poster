import React from 'react';
import ReactDOM from 'react-dom/client';
import { Posts } from './routes/Posts';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { NewPost } from './routes/NewPost';
import { RootLayout } from './routes/RootLayout';
import { PostDetails } from './routes/PostDetails';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [
          { path: '/create-post', element: <NewPost /> },
          { path: ':id', element: <PostDetails /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
