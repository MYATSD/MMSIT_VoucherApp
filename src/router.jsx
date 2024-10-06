import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SalePage from "./pages/SalePage.jsx";
import VoucherPage from "./pages/VoucherPage.jsx";
import ProductCreatePage from "./pages/ProductCreatePage.jsx";
import ProductEditPage from "./pages/ProductEditPage.jsx";
import VoucherDetailPage from "./pages/VoucherDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "/product/edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
      {
        path: "/voucher/detail/:id",
        element: <VoucherDetailPage />
      }
    ],
  },
]);

export default router;
