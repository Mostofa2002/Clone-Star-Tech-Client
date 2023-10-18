import { Link } from "react-router-dom";

const BrandCard = ({ items }) => {
  const { brandImage, brandName } = items || {};
  return (
    <Link to={`/brandProduct/${brandName}`}>
      <div className="card h-[300px] bg-base-200 shadow-xl">
        <h2 className="card-title font-bold ml-6 mt-5">{brandName}</h2>
        <div className=" mt-10">
          <figure>
            <img className="w-[300px] " src={brandImage} alt="Shoes" />
          </figure>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
