import { useParams } from "react-router-dom";

const BrandProduct = () => {
  const { id } = useParams();

  console.log(id);
  return <div>hello</div>;
};

export default BrandProduct;
