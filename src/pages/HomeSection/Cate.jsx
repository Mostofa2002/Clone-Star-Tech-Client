const Cate = ({ data }) => {
  const { titile, drone } = data || {};
  return (
    <div className="card h-[300px] bg-base-200 shadow-xl">
      <h2 className="card-title font-bold ml-6 mt-5 text-2xl">{titile}</h2>
      <div className=" ">
        <figure>
          <img className="w-[200px] " src={drone} alt="Shoes" />
        </figure>
      </div>
    </div>
  );
};

export default Cate;
