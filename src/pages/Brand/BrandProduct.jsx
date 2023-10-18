import { useLoaderData } from "react-router-dom";

import SpecificBrand from "./SpecificBrand";

const BrandProduct = () => {
  const BrandSpecificData = useLoaderData();

  console.log(BrandSpecificData);

  return (
    <div>
      <h1 className="lg:text-7xl md:text-6xl text-4xl font-black text-red-600 mt-20 text-center">
        All Available Content
      </h1>
      <div className="grid lg:grid-cols-2  grid-cols-1 lg:mx-0 md:mx-48 mx-14  lg:gap-x-10 gap-y-16 my-20">
        {BrandSpecificData?.map((items) => (
          <SpecificBrand key={items._id} items={items}></SpecificBrand>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
