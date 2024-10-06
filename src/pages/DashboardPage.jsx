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
  HiReceiptPercent,
  HiSquare2Stack,
  HiSquare3Stack3D,
} from "react-icons/hi2";
import Breadcrumb from "../components/Breadcrumb";

const DashboardPage = () => {
  return (
    <div>
      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-5">
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"Product Module"}
                icon={<HiSquare3Stack3D className=" size-14" />}
                url={"/product"}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"Sale Module"}
                icon={<HiMiniTv className=" size-14" />}
                url={"/sale"}
              />
            </div>
            <div className="col-span-1 row-span-1">
              <ModuleBtn
                name={"Voucher Module"}
                icon={<HiReceiptPercent className=" size-14" />}
                url={"/voucher"}
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default DashboardPage;
