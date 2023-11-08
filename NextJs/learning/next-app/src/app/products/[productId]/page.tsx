import React from "react";

const ProductDetails = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  console.log(params);
  return <div>ProductDetails{params.productId}</div>;
};

export default ProductDetails;
