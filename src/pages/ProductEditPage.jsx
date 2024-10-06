import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import ProductEditCard from "../components/ProductEditCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Edit Product"}
          links={[{ title: "ProductModule", path: "/product" }]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
