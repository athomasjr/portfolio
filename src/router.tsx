import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
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
