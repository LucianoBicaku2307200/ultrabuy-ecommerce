import React from "react";
import {
  Button,
  ProductDetails,
  ProductImages,
  CardSmall,
} from "../../components";

import Img from "../../images/png/product_image_test.jpg";
import Right from "../../images/svg/ic-chevron-right.svg";
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
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <ProductImages
          loading={false}
          imageUrls={imageUrls}
          price={100}
          previousPrice={500}
        />
        <ProductDetails
          title="Product title"
          rating={3.9}
          price="36.99"
          currency="ALL"
          previousPrice="40.99"
          reviewNr={18}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh tellus molestie."
        />
      </div>
      <div className="flex flex-col flex-wrap w-full px-1 pt-5">
        <div className="flex justify-between items-center px-4 pt-5">
          <h2 className="text-lg font-semibold">Related Products</h2>
          <Button
            className="rounded-xl px-4 py-2.5 hover:shadow-md hover:bg-white text-black hover:text-C2-default transition duration-500 ease-in-out"
            content="More Products"
            icon={Right}
            IconClassName="-mr-1.5"
          />
        </div>
        <div className="flex flex-row flex-wrap w-full">
          <CardSmall
            classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full relative rounded-xl p-1"
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
          <CardSmall
            classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full relative rounded-xl p-1"
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
          <CardSmall
            classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full relative rounded-xl p-1"
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
          <CardSmall
            classNameCard="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border border-C1-D h-full relative rounded-xl p-1"
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
      </div>
    </div>
  );
};

export default Index;
