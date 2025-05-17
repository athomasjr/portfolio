import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

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
        path: `about`,
        Component: About,
      },
      {
        path: `blog`,
        Component: Blog,
      },
    ],
  },
]);
