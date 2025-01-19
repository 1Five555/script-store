import React from "react";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProduct } from "@/lib/actions/product.action";
import { Product } from "@/types";

const HomePage = async () => {
  const latestProducts: Product[] = await getLatestProduct();
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
