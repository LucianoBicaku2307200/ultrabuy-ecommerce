import React, { useState } from "react";
import { Categories, Brands, Ratings, Price } from "./components";
import { Button } from "../../components";
const Layout3 = ({ children, childrenClassName }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 0 });

  const handlePriceChange = (min, max) => {
    setPrice({ ...price, min: min, max: max });
  };

  return (
    <div className="flex w-full flex-col xl:py-16 xl:px-11 md:py-8 md:px-6 p-4 md:flex-row md:mb-3 justify-between">
      <div className="w-auto flex-col mb-3 hidden md:flex md:w-1/4 md:mr-8">
        <Categories />
        <Brands
          selectedBrands={selectedBrands}
          addbrand={(newBrand) => {
            if (!selectedBrands.includes(newBrand)) {
              setSelectedBrands((prevState) => [...prevState, newBrand]);
            } else {
              setSelectedBrands(selectedBrands.filter((el) => el !== newBrand));
            }
          }}
        />
        <Ratings
          selectedRatings={selectedRatings}
          addRating={(newRating) => {
            if (!selectedRatings.includes(newRating)) {
              setSelectedRatings((prevState) => [...prevState, newRating]);
            } else {
              setSelectedRatings(
                selectedRatings.filter((el) => el !== newRating)
              );
            }
          }}
        />
        <Price price={price} setPrice={handlePriceChange} />
        <div className="flex">
          <Button
            onClick={() => console.log(selectedBrands, selectedRatings, price)}
            content="Apply"
            className="mt-8 mr-4 bg-C2-default text-white text-sm font-bold py-3 px-4 border-2 border-C2-B  transition-all ease-linear duration-300 hover:text-black hover:bg-transparent hover:border-C1-C"
          />
          <Button
            content="Reset"
            className="mt-8 mr-4 text-C1-C text-sm font-bold py-3 px-4 border-2 border-transparent hover:border-C1-C  transition-all ease-linear duration-300 hover:text-black hover:bg-transparentborder-C1-C"
          />
        </div>
      </div>
      <div className={"flex-1 " + childrenClassName}>{children}</div>
    </div>
  );
};

export default Layout3;
