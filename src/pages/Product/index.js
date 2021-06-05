import React from "react";
import { ProductDetails, ProductImages } from "../../components";

import Pat1 from "../../images/svg/Thur.svg";
import Pat2 from "../../images/svg/Waimakariri.svg";

const imageUrls = [
  {
    imgUR: Pat1,
    alt: " ",
  },
  {
    imgUR: Pat2,
    alt: " ",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <ProductImages
        loading={false}
        imageUrls={imageUrls}
        price={100}
        previousPrice={500}
      />
      <ProductDetails title="Testicles" />
    </div>
  );
};

export default Index;
