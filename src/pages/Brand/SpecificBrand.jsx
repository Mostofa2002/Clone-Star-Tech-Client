const SpecificBrand = ({ items }) => {
  const { photo, name, price, brand, rating, type } = items || {};
  return (
    <div className="card w-[500px] p-10  shadow-xl">
      <h2 className="card-title font-bold ml-6 mt-5">Product Name: {name}</h2>

      <div className=" mt-10">
        <figure>
          <img className="w-1/2 " src={photo} alt="Shoes" />
        </figure>
        <h2 className="card-title font-bold ml-6 mt-5">
          Product Brand: {brand}
        </h2>
        <h2 className="card-title font-bold ml-6 mt-5">Product Type: {type}</h2>
        <h2 className="card-title font-bold ml-6 mt-5">
          Product Price: {price}
        </h2>
        <h2 className="card-title font-bold ml-6 mt-5">
          Product Rating: {rating}
        </h2>
      </div>
    </div>
  );
};

export default SpecificBrand;
