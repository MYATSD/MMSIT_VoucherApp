import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCookie from 'react-use-cookie';
import useUserStore from "../store/useUserStore";


const Layout = () => {
  const nav = useNavigate()
  const [userCookie] = useCookie("user_info")
  const [userToken] = useCookie("my_token")
  const { user, setUser } = useUserStore()
  console.log(userToken)
  // useEffect(() => {
  //   if (!userToken) {
  //     nav("/")
  //   }
  // })
  useEffect(() => {
    console.log(user)
    setUser(JSON.parse(userCookie))

  }, [])
  if (!userToken) {
    <Navigate to={"/"} />
  }
  return (
    <main className="flex flex-col min-h-screen p-5">
      <Header />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default Layout;
