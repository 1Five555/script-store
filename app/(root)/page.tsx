import React from "react";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
const HomePage = async () => {
  console.log(sampleData);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
