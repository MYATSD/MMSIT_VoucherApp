import React from "react";
import VoucherList from "../components/VoucherList";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"VoucherPage"} links={[]} />
        <VoucherList />
      </Container>
    </section>
  );
};

export default VoucherPage;
