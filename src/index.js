import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      { index: true, element: <App /> },
      { path: "/product/:id", element: <ProductDetails /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
