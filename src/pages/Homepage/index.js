import React, { useState } from "react";
import { Button, Menu, CardSmall, Reviews } from "../../components";
import { Layout1 } from "../../layouts";

import Pat1 from "../../images/svg/Thur.svg";
import Pat2 from "../../images/svg/Waimakariri.svg";

import Img from "../../images/png/product_image_test.jpg";
const MenuItems = [
  { categorie: "Bakery", subcategories: ["value1", "value2", "value3"] },
  {
    categorie: "Fruit and vegetables",
    subcategories: ["value1", "value2", "value3"],
  },
  { categorie: "Meat and fish", subcategories: ["value1", "value2", "value3"] },
  { categorie: "Drinks", subcategories: ["value1", "value2", "value3"] },
];
const Products = [
  {
    productName: "Product Name",
    description: "Space for a small product description",
    rating: 3.24,
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    loading: false,
    imageUrl: { Img },
  },
  {
    productName: "Product Name",
    description: "Space for a small product description",
    rating: 3.24,
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    loading: false,
    imageUrl: { Img },
  },
  {
    productName: "Product Name",
    description: "Space for a small product description",
    rating: 3.24,
    price: "36.99",
    currency: "All",
    previousPrice: "40.99",
    loading: false,
    imageUrl: { Img },
  },
];
const Links = [
  { text: "Bakery", url: "/" },
  { text: "Fruit and vegetables", url: "/" },
  { text: "Meat and fish", url: "/" },
  { text: "Drinks", url: "/" },
  { text: "Kitchen", url: "/" },
];

const HomePage = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <div className="flex flex-col lg:gap-14 md:w-11/12 mx-auto">
      <Menu items={MenuItems} />
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 mx-auto"
        title="Best selling products"
        links={Links}
        buttuonUrl="/"
        buttonContent="More Products"
      >
        <div className="flex flex-row items-center h-3/4 w-full gap-x-20 pt-8">
          <div className="flex self-center border border-C1-C rounded-xl overflow-hidden transform transition duration-500">
            <div
              className="flex rounded-xl w-full h-full justify-center items-center"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <div
                className={`absolute rounded-xl justify-center items-center content-center flex w-full h-full bg-black bg-opacity-40 z-10 transform transition duration-500 ${
                  show ? " bg-opacity-70 " : " "
                }`}
              >
                <p className="flex text-white text-2xl font-bold tracking-widest hover:underline cursor-pointer">
                  Summer Sale
                </p>
              </div>
              <img src={Pat1} alt="" />
              <Button
                className={`text-black text-sm bg-white rounded-md px-4 py-2
             hover:bg-white hover:text-C2-default hover:shadow
             absolute top-3/4 self-center mt-5 shadow-md transform transition ease-linear duration-300 ${
               show ? " flex z-20 " : " hidden "
             }`}
                content="Explore"
              />
            </div>
          </div>

          <div className="flex self-center border border-C1-C rounded-xl overflow-hidden transform transition duration-500">
            <div
              className="flex rounded-xl w-full h-full justify-center items-center"
              onMouseEnter={() => setShow2(true)}
              onMouseLeave={() => setShow2(false)}
            >
              <div
                className={`absolute rounded-xl justify-center items-center content-center flex w-full h-full bg-black bg-opacity-40 z-10 transform transition duration-500 ${
                  show2 ? " bg-opacity-70 " : " "
                }`}
              >
                <p className="flex text-white text-2xl font-bold tracking-widest hover:underline cursor-pointer">
                  Picks for you
                </p>
              </div>
              <img src={Pat2} alt="" />
              <Button
                className={`text-black text-sm bg-white rounded-md px-4 py-2
             hover:bg-white hover:text-C2-default hover:shadow
             absolute top-3/4 self-center mt-5 shadow-md transform transition ease-linear duration-300 ${
               show2 ? " flex z-20 " : " hidden "
             }`}
                content="Explore"
              />
            </div>
          </div>
        </div>
      </Layout1>
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 mx-auto"
        title="Best selling products"
        links={Links}
        buttuonUrl="/"
        buttonContent="More Products"
      >
        {Products.map((el, index) => (
          <div className="p-1 sm:w-1/2 lg:w-1/3 w-full" key={index}>
            <CardSmall
              classNameCard="w-full border border-C1-D rounded-lg"
              title="Product Name"
              description="Space for a small product description"
              rating={null}
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
          </div>
        ))}
      </Layout1>
      <Reviews wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 lg:w-full mx-auto" />
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        wrapperClassname="py-5 md:py-10 lg:py-3 w-11/12 mx-auto"
        title="Todays Offers"
        links={Links}
        buttuonUrl="/"
        buttonContent="More Products"
      >
        {Products.map((el, index) => (
          <div className="p-1 sm:w-1/2 lg:w-1/3 w-full" key={index}>
            <CardSmall
              classNameCard="w-full border border-C1-D rounded-lg"
              title="Product Name"
              description="Space for a small product description"
              rating={null}
              price="36.99"
              currency="All"
              previousPrice="40.99"
              loading={false}
              redirectUrl="/"
              imageUrl={Img}
            />
          </div>
        ))}
      </Layout1>
    </div>
  );
};

export default HomePage;
