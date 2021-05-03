import React from "react";
import { CardSmall } from "../../components";
import Img from "../../images/png/product_image_test.jpg";
import { Layout1 } from "../../layouts";
const index = () => {
  return (
    <div>
      <Layout1
        childrenClassName="flex flex-wrap -m-1"
        title="Category menu"
        links={[
          { text: "Bakery", url: "/" },
          { text: "Fruit and vegetables", url: "/" },
          { text: "Meat and fish", url: "/" },
          { text: "Drinks", url: "/" },
          { text: "Kitchen", url: "/" },
        ]}
      >
        <div className="p-1 sm:w-1/2 lg:w-1/3">
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
        <div className="p-1 sm:w-1/2 lg:w-1/3">
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
        <div className="p-1 sm:w-1/2 lg:w-1/3">
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
      </Layout1>
    </div>
  );
};

export default index;
