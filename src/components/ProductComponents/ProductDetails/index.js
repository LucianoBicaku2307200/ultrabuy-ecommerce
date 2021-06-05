import React from "react";

const ProductDetails = ({
  title,
  description,
  rating,
  redirectUrl,
  currency,
  price,
  previousPrice,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/2 ring-2 ring-black">
      <div className="flex text-3xl font-bold py-1 pl-3">{title}</div>
      <div></div>
    </div>
  );
};

export default ProductDetails;
