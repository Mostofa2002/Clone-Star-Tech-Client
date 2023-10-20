import BrandCard from "./BrandCard";

const Brand = ({ data }) => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold dark:text-white mt-10">
        Brand Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:mx-48 py-10 ">
        {data?.map((items) => (
          <BrandCard key={items.id} items={items}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brand;
