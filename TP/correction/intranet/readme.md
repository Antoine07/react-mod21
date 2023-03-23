- Penser à gérer les erreurs type 404

# ROUTER

    ADDING A ROUTER

```sh
npm install react-router-dom localforage match-sorter sort-by
```

**src/main.jsx**

```js
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

//'root root' 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

Make link, example : 

```
<Link to={`contacts/1`}>Your Name</Link>
```
