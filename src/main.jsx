import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import ErrorPage from "./error-page";
import "./index.css";

import Home from './routes/home';
import Article from './routes/article';
import Articles from './routes/Articles';
import Authors from './routes/authors';
import Author from './routes/author';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home />
      },
      {
        path: "/articles/:article",
        element: <Article />
      },
      {
        path: "/authors",
        element: <Authors />

      },
      {
        path: "/articles",
        element: <Articles />
      },
      {
        path:"/authors/author",
        element: <Author />
      }

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
