import React from "react";
import Container from "./Container";
import useCookie from "react-use-cookie";
import useUserStore from "../store/useUserStore";

const Header = () => {
  const [userCookie] = useCookie("user_info")
  const { user: { name, email, profile_image } } = useUserStore()
  // const { name, email, profile_image } = JSON.parse(userCookie)
  return (
    <header className="mb-5">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-sans font-bold ">Voucher App</h1>
            <p className="text-stone-500">MMS Software</p>
          </div>
          <div className="flex justify-end  gap-2">
            <img className="size-11  border-2 rounded-full" src={profile_image ? profile_image : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"} alt="" />
            <div>
              <h1 className="text-xl font-semibold">{name}</h1>
              <p className="text-sm ">{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
