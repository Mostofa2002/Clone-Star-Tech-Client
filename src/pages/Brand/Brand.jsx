import BrandCard from "./BrandCard";

const Brand = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5 lg:ml-36 gap-10 py-10">
      {data?.map((items) => (
        <BrandCard key={items.id} items={items}></BrandCard>
      ))}
    </div>
  );
};

export default Brand;
