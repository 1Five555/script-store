import React from "react";
import ProductCard from "@/components/shared/product/product-card";
const ProductList = ({
  data,
  title,
  limit,
}: {
  data: [];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className={"my-10"}>
      <h2 className={"h2-bold mb-4"}>{title}</h2>
      {data.length > 0 ? (
        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          }
        >
          {limitedData.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      ) : (
        <div>
          {" "}
          <p>No Products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
