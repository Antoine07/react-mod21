import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Root from "./routes/root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./components/error-page";
import Dashboard from "./components/Dashboard";
import Sector from "./components/Sector";
import Stacks from "./components/Stacks";
import Questions from "./components/Questions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/sector",
        element: <Sector />,
      },
      {
        path: "/stacks",
        element: <Stacks />,
      },
      {
        path: "/questions",
        element: <Questions />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
