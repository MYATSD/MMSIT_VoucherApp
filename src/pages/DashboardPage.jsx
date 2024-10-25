import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import {
  HiCircleStack,
  HiComputerDesktop,
  HiDocumentDuplicate,
  HiMiniTv,
  HiOutlineSquare3Stack3D,
  HiOutlineSquares2X2,
  HiOutlineUser,
  HiReceiptPercent,
  HiSquare2Stack,
  HiSquare3Stack3D,
} from "react-icons/hi2";
import Breadcrumb from "../components/Breadcrumb";
import Logout from "../components/Logout";
import { HiOutlineUserCircle, HiUser, HiUserCircle } from "react-icons/hi";

const DashboardPage = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"Product Module"}
                icon={<HiSquare3Stack3D className=" size-14" />}
                url={"/dashboard/product"}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"Sale Module"}
                icon={<HiMiniTv className=" size-14" />}
                url={"/dashboard/sale"}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"Voucher Module"}
                icon={<HiReceiptPercent className=" size-14" />}
                url={"/dashboard/voucher"}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"User Profile"}
                icon={<HiUserCircle className=" size-14" />}
                url={"/dashboard/user_profile"}
              />
            </div>
          </div>
          <div className="flex mt-4 justify-end items-center gap-2">
            <p>If you finish your job, just </p>

            <Logout />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DashboardPage;
