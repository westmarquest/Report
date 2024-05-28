import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
// import Projects from "./components/Projects/index.jsx";
// import Error from "./pages/Error.js";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/marques",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/marques/projects/:projectId",
      //   element: <Projects />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
