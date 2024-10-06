import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";
import ProductCreateCard from "../components/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "ProductModule", path: "/product" }]}
        />
        <ProductCreateCard />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
