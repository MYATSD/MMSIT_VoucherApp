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
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import UserProfilePage from "./pages/userProfilePage.jsx";
import UserProfileChangeName from "./pages/userProfileChangeName.jsx";
import UserProfileChangeProfile from "./pages/UserProfileChangeProfile.jsx";
import UserProfileChangePassword from "./pages/UserProfileChangePassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <LoginPage />,

    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [{
          index: true,
          element: <DashboardPage />
        },
        {
          path: "product",
          element: <ProductPage />
        },
        {
          path: "product/create",
          element: <ProductCreatePage />,
        },
        {
          path: "product/edit/:id",
          element: <ProductEditPage />,
        },
        {
          path: "sale",
          element: <SalePage />,
        },
        {
          path: "voucher",
          element: <VoucherPage />,
        },
        {
          path: "voucher/detail/:id",
          element: <VoucherDetailPage />
        },
        {
          path: "user_profile",
          children: [{
            index: true,
            element: <UserProfilePage />
          },
          {
            path: 'changeName',
            element: <UserProfileChangeName />

          },
          {
            path: "changeProfile",
            element: <UserProfileChangeProfile />
          },
          {
            path: "changePassword",
            element: <UserProfileChangePassword />
          }

          ]
        }
        ]
      },

    ],
  },
]);

export default router;
