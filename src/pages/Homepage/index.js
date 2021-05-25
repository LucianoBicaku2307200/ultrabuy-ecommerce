import React from "react";
import { Menu, CardSmall, Reviews } from "../../components";
import { Layout1 } from "../../layouts";
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
        <div className="p-1 sm:w-1/2 lg:w-1/3 w-full">lool</div>
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
