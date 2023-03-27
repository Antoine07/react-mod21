import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store/userSlice";
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import ErrorPage from "./components/error-page";
import Root from "./routes/root";
import User from './components/User';

import Protected from "./routes/ProtectedRoute"


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
        path: "users",
        element: <Protected><User /></Protected>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
