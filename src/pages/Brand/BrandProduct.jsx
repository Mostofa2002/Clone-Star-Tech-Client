import { useLoaderData } from "react-router-dom";

import SpecificBrand from "./SpecificBrand";

const BrandProduct = () => {
  const BrandSpecificData = useLoaderData();

  console.log(BrandSpecificData);

  return (
    <div>
      <h1 className="lg:text-7xl  text-4xl font-black text-blue-600 mt-20 text-center">
        All Available Product
      </h1>
      <div className="grid lg:grid-cols-2  grid-cols-1 lg:ml-36  gap-y-16 my-20">
        {BrandSpecificData?.map((items) => (
          <SpecificBrand key={items._id} items={items}></SpecificBrand>
        ))}
      </div>
    </div>
  );
};

export default BrandProduct;
