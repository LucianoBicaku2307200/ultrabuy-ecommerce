import React from "react";
import { CardBig } from "../../components";
import Img from "../../images/png/product_image_test.jpg";
const index = () => {
  return (
    <div>
      <CardBig
        classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full p-4 relative rounded-xl w-full"
        title="Product Name"
        description="Space for a small product description"
        rating="3.4"
        price="36.99"
        currency="All"
        previousPrice="40.99"
        loading={false}
        redirectUrl="/"
        imageUrl={Img}
      />
    </div>
  );
};

export default index;
