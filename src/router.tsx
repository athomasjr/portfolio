import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import Home from './pages/Home';

export const router = createBrowserRouter([
  {
    path: `/`,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: `blog`,
        Component: Blog,
      },
    ],
  },
]);
