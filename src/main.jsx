import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/productAdd",
        element: <ProductAdd />,
      },
      {
        path: "/brandProduct/:id",
        element: <BrandProduct />,
      },
    ],
  },
]);
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home";
import BrandProduct from "./pages/Brand/BrandProduct";
import ProductAdd from "./pages/Brand/ProductAdd/ProductaAdd";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);