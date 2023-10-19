import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home";
import BrandProduct from "./pages/Brand/BrandProduct";
import ProductAdd from "./pages/ProductAdd/ProductAdd";
import "./index.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ErrorPage from "./pages/Error/ErrorPage";
import AddCart from "./pages/AddCart/AddCart";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        path: "/brandProduct/:brand",
        element: <BrandProduct></BrandProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params?.brand}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addCart/:id",
        element: <AddCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
