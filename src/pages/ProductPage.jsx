import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/Container";
import ProductList from "../components/ProductList";
import React from "react";
// import { Toaster } from "react-hot-toast";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"ProductPage"} links={[]} />
        <ProductList />
        {/* <Toaster /> */}
      </Container>
    </section>
  );
};

export default ProductPage;
